'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function OtelixWidget() {
  const pathname = usePathname()
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const loadWidget = () => setShouldLoad(true)

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(loadWidget, { timeout: 3000 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timeoutId = window.setTimeout(loadWidget, 2000)
    return () => window.clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (!shouldLoad) return

    const existing = document.querySelector('script[src*="hotelBdraivLoader"]')
    if (existing) existing.remove()

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = `https://otelix.pro/js/hotelBdraivLoader.js?t=${Date.now()}`
    document.body.appendChild(script)

    return () => {
      const s = document.querySelector('script[src*="hotelBdraivLoader"]')
      if (s) s.remove()
    }
  }, [pathname, shouldLoad])

  if (!shouldLoad) {
    return null
  }

  return (
    <div
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
