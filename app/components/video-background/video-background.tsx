'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './video-background.module.css'

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    let cancelled = false

    const loadVideo = () => {
      if (!cancelled) setShouldLoad(true)
    }

    const idleWindow = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }

    if (typeof idleWindow.requestIdleCallback === 'function') {
      const idleId = idleWindow.requestIdleCallback(loadVideo, { timeout: 2000 })
      return () => {
        cancelled = true
        idleWindow.cancelIdleCallback?.(idleId)
      }
    }

    const timeoutId = window.setTimeout(loadVideo, 1500)
    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return
    videoRef.current.load()
    videoRef.current.play().catch(() => {})
  }, [shouldLoad])

  return (
    <video
      ref={videoRef}
      className={styles['video']}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster="/photos/aboutbg-poster.webp"
      aria-label="Видео парк-отеля Дзуарикау среди гор"
    >
      {shouldLoad ? <source src="/video/main1.webm" type="video/webm" /> : null}
      Ваш браузер не поддерживает видео
    </video>
  )
}
