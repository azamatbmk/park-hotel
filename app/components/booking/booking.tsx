import styles from './booking.module.css'

export default function BookingBlock() {

    return (
        <div className={styles['booking-form']}>
            <div className={styles['hint']}>Бронирование <br /> номеров</div>

            <div className={styles['form-field']}>
                <div className={styles['input-wrapper']}>
                    <span className={styles['label-inside']}>Дата заезда</span>
                    <input className={styles['input']} type="date" />
                    <img src="./date-icon.svg" className={styles['calendar-icon']} alt="иконка" />
                </div>
            </div>

            <div className={styles['form-field']}>
                <div className={styles['input-wrapper']}>
                    <span className={styles['label-inside']}>Дата выезда</span>
                    <input className={styles['input']} type="date" />
                    <img src="./date-icon.svg" className={styles['calendar-icon']} alt="иконка" />
                </div>
            </div>

            <div className={styles['form-field']}>
                <div className={styles['input-wrapper']}>
                    <span className={styles['label-inside']}>Гостей</span>
                    <input className={styles['input']} type="number" />
                </div>
            </div>

            <button className={styles['btn']}>Найти</button>
    </div>
    )
}