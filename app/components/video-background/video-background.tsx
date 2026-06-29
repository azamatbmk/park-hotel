'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './video-background.module.css'

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const loadVideo = () => setShouldLoad(true)

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(loadVideo, { timeout: 2000 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timeoutId = window.setTimeout(loadVideo, 1500)
    return () => window.clearTimeout(timeoutId)
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
