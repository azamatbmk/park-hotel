import { ReactNode, useEffect } from 'react';
import styles from './modal.module.css';
import Link from 'next/link';
import PhoneButton from '../buttons/phone-btn';
import { menuItems } from '../hero-section/constants';
import closeIcon from "../../../public/close-icon.svg"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles['overlay']} onClick={onClose}>
      <div className={styles['modal']} onClick={e => e.stopPropagation()}>
        <button className={styles['close-button']} onClick={onClose}>X</button>
          <h4 className={styles['h4']}>Навигация</h4>
          <div className={styles['nav-and-phoneBtn-wrapper']}>
            <nav >
                <ul className={styles['nav-wrapper']}>
                    { menuItems.map((item) => {
                    return (
                        <li key={item.href}>
                            <Link href={item.href}>
                                {item.title}
                            </Link>
                        </li>
                    )
                    })}
                </ul>
            </nav>
            <div>
              <Link href="tel:+79280701155" className={styles['phone-btn']} >+7 (928) 070-11-55</Link>
            </div>
          </div>
        {children}
      </div>
    </div>
  );
}