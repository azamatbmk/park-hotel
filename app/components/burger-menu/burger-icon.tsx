'use client'

import { useState } from 'react';
import NavMenu from '../nav-menu/nav-menu';
import styles from './burger-icon.module.css';
import Modal from './modal';

export default function BurgerIcon() {

    const [closeModal, setCloseModal] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const modalToggle = () => {
        if (closeModal) {
            setCloseModal(false)
            setIsOpen(false)
        } else {
            setCloseModal(true)
            setIsOpen(true)
            }
    }

    return (
        <>
            <button 
                className={`${styles['burger-btn']} ${isOpen ? styles['open'] : ''}`}
                onClick={modalToggle}
                aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={isOpen}
            >
                <span className={styles['line']}></span>
                <span className={styles['line']}></span>
                <span className={styles['line']}></span>
            </button>
            <Modal
                isOpen={closeModal}
                onClose={() => {
                    setCloseModal(false)
                    setIsOpen(false)
                }}
            >{<NavMenu/>}</Modal>
        </>
    );
}
