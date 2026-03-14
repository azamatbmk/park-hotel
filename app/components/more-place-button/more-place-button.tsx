'use state'


import { MouseEvent } from 'react';
import { useState } from 'react';
import styles from './more-place-button.module.css';

export default function MorePlaceButton ()  {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles['container']}>
      <button 
        className={`${styles['more-place-btn']} ${isOpen ? styles['open']: ''}`}
        onClick={toggleButton}
      >
        доп.{'\u00A0'}место{'\u00A0'}
        <span className={styles['arrow']}>▼</span>
      </button>
      
      {isOpen && (
        <div className={styles['price']}>
          2 500 ₽
        </div>
      )}
    </div>
  );
};

