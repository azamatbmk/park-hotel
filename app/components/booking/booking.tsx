import styles from './booking.module.css'

const getClassName = (baseName: string, position: 'absolute' | 'relative') => {
    const suffix = position === 'absolute' ? '' : '__relative';
    return styles[`${baseName}${suffix}`];
}

export default function BookingBlock({
    position,
    display 
}: { 
    position: 'absolute' | 'relative',
    display?: 'none' | 'hide-mobile' | 'hide-desktop'
}) {
   
    const containerClass = position === 'absolute' 
        ? styles['booking-form']
        : styles['booking-form__relative'];

    const displayClass = display ? styles[display] : '';

    return (
        <div className={`${containerClass} ${displayClass}`}>
            <div className={getClassName('hint-desktop', position)}>
                Бронирование <br/> номеров
            </div>
            <div className={styles['hint-mobile']}>Бронирование номеров</div>
            <div className={getClassName('form-container', position)}>
                <div className={getClassName('form-wrapper', position)}>
                    <div className={getClassName('form-field', position)}>
                        <div className={getClassName('input-wrapper', position)}>
                            <span className={styles['label-inside']}>Дата заезда</span>
                            <input className={getClassName('input', position)} type="date" />
                            <img src="./date-icon.svg" className={styles['calendar-icon']} alt="иконка" />
                        </div>
                    </div>
                    <div className={getClassName('form-field', position)}>
                        <div className={getClassName('input-wrapper', position)}>
                            <span className={styles['label-inside']}>Дата выезда</span>
                            <input className={getClassName('input', position)} type="date"/>
                            <img src="./date-icon.svg" className={styles['calendar-icon']} alt="иконка" />
                        </div>
                    </div>
                </div>
                
                <div className={`${getClassName('form-wrapper', position)} ${position === 'relative' ? styles['flex-start'] : ''}`}>
                    <div className={getClassName('form-field', position)}>
                        <div className={getClassName('input-wrapper', position)}>
                            <span className={styles['label-inside']}>Гостей</span>
                            <input className={getClassName('input', position)} type="number" min={0}/>
                            <img src="./human-icon.svg" className={styles['calendar-icon']} alt="иконка" />
                        </div>
                    </div>
                    <button className={getClassName('btn', position)}>
                        {position === 'absolute' ? 'Найти' : 'Забронировать'}
                    </button>
                </div>
            </div>
        </div>
    )
}