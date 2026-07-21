'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import styles from './burger-icon.module.css'
import Modal from './modal'

export default function BurgerIcon({ black }: { black: boolean }) {
    const pathname = usePathname()
    const [menuPath, setMenuPath] = useState<string | null>(null)
    const isOpen = menuPath === pathname

    return (
        <>
            <button
                className={`${styles['burger-btn']} ${isOpen ? styles['open'] : ''}`}
                onClick={() => setMenuPath(isOpen ? null : pathname)}
                aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
                aria-expanded={isOpen}
                type="button"
            >
                <span className={`${black ? styles['line__black'] : styles['line']}`}></span>
                <span className={`${black ? styles['line__black'] : styles['line']}`}></span>
                <span className={`${black ? styles['line__black'] : styles['line']}`}></span>
            </button>
            <Modal isOpen={isOpen} onClose={() => setMenuPath(null)} />
        </>
    )
}
