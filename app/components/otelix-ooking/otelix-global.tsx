'use client'

import { usePathname } from 'next/navigation'
import OtelixWidget from './otelix-booking'
import styles from '../../otelix/otelix.module.css'

const HIDDEN_PATHS = ['/luxroom', '/luxroom2', '/luxroom3', '/otelix']

/** Глобальный Otelix-оверлей для всех страниц, кроме карточек номеров и /otelix */
export default function OtelixGlobal() {
  const pathname = usePathname()

  if (HIDDEN_PATHS.includes(pathname)) return null

  return (
    <div className={styles['otelix']}>
      <OtelixWidget />
    </div>
  )
}
