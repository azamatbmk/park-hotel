'use client'

import OtelixWidget from './otelix-booking'
import styles from '../../otelix/otelix.module.css'

/** Otelix в потоке страницы — для карточек номеров */
export default function OtelixInline() {
  return (
    <div className={styles['otelix-inline']}>
      <OtelixWidget />
    </div>
  )
}
