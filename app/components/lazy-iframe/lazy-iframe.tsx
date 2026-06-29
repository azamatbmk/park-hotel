'use client'

import { useEffect, useRef, useState } from 'react'

type LazyIframeProps = {
  title: string
  src: string
  containerClassName?: string
  className?: string
  width?: number | string
  height?: number | string
  frameBorder?: number | string
  allowFullScreen?: boolean
}

export default function LazyIframe({
  title,
  src,
  containerClassName,
  className,
  width,
  height,
  frameBorder,
  allowFullScreen = true,
}: LazyIframeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node || shouldLoad) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [shouldLoad])

  return (
    <div ref={containerRef} className={containerClassName}>
      {shouldLoad ? (
        <iframe
          title={title}
          src={src}
          className={className}
          width={width}
          height={height}
          frameBorder={frameBorder}
          allowFullScreen={allowFullScreen}
          loading="lazy"
        />
      ) : null}
    </div>
  )
}
