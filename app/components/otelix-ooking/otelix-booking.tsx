'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const LOADER_SELECTOR = 'script[src*="hotelBdraivLoader"]'
const SCRIPT_SELECTOR = 'script[src*="hotelBdraivScript"]'

type OtelixWindow = Window & {
  hotelBdraivScriptLoaded?: boolean
  jQuery?: JQueryLike
  $?: JQueryLike
}

type JQueryLike = {
  (el: Element): {
    removeClass: (name: string) => unknown
    hotelBdraivForm: (options?: { autoload?: boolean }) => unknown
  }
  fn: {
    hotelBdraivForm?: unknown
  }
}

function getJQuery(): JQueryLike | undefined {
  const w = window as OtelixWindow
  return w.jQuery || w.$
}

function canInitForm(): boolean {
  const $ = getJQuery()
  return Boolean($ && typeof $.fn?.hotelBdraivForm === 'function')
}

function initForm(form: HTMLElement): boolean {
  const $ = getJQuery()
  if (!$ || typeof $.fn?.hotelBdraivForm !== 'function') return false
  $(form).removeClass('hotelBdraivForm_initialized')
  $(form).hotelBdraivForm()
  return true
}

function removeOtelixScripts() {
  document.querySelectorAll(`${LOADER_SELECTOR}, ${SCRIPT_SELECTOR}`).forEach((node) => {
    node.remove()
  })
}

export default function OtelixWidget() {
  const pathname = usePathname()
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const form = formRef.current
    if (!form) return

    let cancelled = false
    let pollId = 0
    let loadTimer = 0
    let stopPollTimer = 0

    const tryInit = () => {
      if (cancelled || !formRef.current) return false
      return initForm(formRef.current)
    }

    if (canInitForm()) {
      loadTimer = window.setTimeout(() => {
        tryInit()
      }, 0)
      return () => {
        cancelled = true
        window.clearTimeout(loadTimer)
      }
    }

    const w = window as OtelixWindow
    w.hotelBdraivScriptLoaded = false
    removeOtelixScripts()

    loadTimer = window.setTimeout(() => {
      if (cancelled) return

      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = `https://otelix.pro/js/hotelBdraivLoader.js?t=${Date.now()}`
      document.body.appendChild(script)

      pollId = window.setInterval(() => {
        if (tryInit()) {
          window.clearInterval(pollId)
        }
      }, 100)

      stopPollTimer = window.setTimeout(() => window.clearInterval(pollId), 8000)
    }, 50)

    return () => {
      cancelled = true
      window.clearTimeout(loadTimer)
      window.clearTimeout(stopPollTimer)
      window.clearInterval(pollId)
    }
  }, [pathname])

  return (
    <div
      ref={formRef}
      className="hotelBdraivForm"
      data-online="1"
      data-frame_width="100"
      data-frame_height="100"
      data-online_full="1"
      data-frame_src="https://otelix.pro/bookOnline/852/t-651"
      data-class_frame_src="https://otelix.pro/bookOnline/852/t-651/c-otelixClass"
      style={{ minWidth: '100%', height: '100px' }}
    >
      &nbsp;
    </div>
  )
}
