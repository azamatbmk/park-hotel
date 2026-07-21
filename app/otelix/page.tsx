import type { Metadata } from 'next'
import OtelixInline from '../components/otelix-ooking/otelix-inline'
import { createMetadata } from '../lib/seo'
import styles from './otelix.module.css'

export const metadata: Metadata = createMetadata({
  title: 'Бронирование',
  path: '/otelix',
  noIndex: true,
})

export default function OtelixPage() {
  return (
    <main className={styles['otelix-page']}>
      <OtelixInline />
    </main>
  )
}
