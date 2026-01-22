import styles from './booking.module.css'

export default function BookingBlock() {

    return (
        <div className={styles.bookingForm}>
            <div className={styles.hint}>Бронирование <br /> номеров</div>

            <div className={styles.formField}>
                <div className={styles.inputWrapper}>
                    <span className={styles.labelinside}>Дата заезда</span>
                    <input className={styles.input} type="date" />
                    <img src="./date-icon.svg" className={styles.calendarIcon} alt="иконка" />
                </div>
            </div>

            <div className={styles.formField}>
                <div className={styles.inputWrapper}>
                    <span className={styles.labelinside}>Дата выезда</span>
                    <input className={styles.input} type="date" />
                    <img src="./date-icon.svg" className={styles.calendarIcon} alt="иконка" />
                </div>
            </div>

            <div className={styles.formField}>
                <div className={styles.inputWrapper}>
                    <span className={styles.labelinside}>Гостей</span>
                    <input className={styles.input} type="number" />
                </div>
            </div>

            <button className={styles.btn}>Найти</button>
    </div>
    )
}