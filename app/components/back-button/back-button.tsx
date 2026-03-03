'use client'

import { useRouter } from 'next/navigation';
import styles from './back-button.module.css';

export default function BackButton () {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()}
      className={styles.backButton}
    >
        <svg viewBox="0 0 28 24" fill="currentColor" width="28" height="24">
            <path d="M24 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H24v-2z"/>
        </svg>
        Назад
    </button>
  );
};

