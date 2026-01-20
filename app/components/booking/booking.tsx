import styles from './booking.module.css'

export default function BookingBlock() {

    return (
        <div className={styles.bookingForm}>
            <div className="hint">Бронирование <br /> номеров</div>

            <div className={styles.formField}>
                <div className={styles.inputWrapper}>
                    <span className="label-inside">Дата заезда</span>
                    <input type="date" />
                    <img src="./date-icon.svg" className="calendar-icon" alt="иконка" />
                </div>
            </div>

            <div className={styles.formField}>
                <div className={styles.inputWrapper}>
                    <span className="label-inside">Дата выезда</span>
                    <input type="date" />
                    <img src="./date-icon.svg" className="calendar-icon" alt="иконка" />
                </div>
            </div>

            <div className={styles.formField}>
                <div className={styles.inputWrapper}>
                    <span className="label-inside">Гостей</span>
                    <input type="number" />
                </div>
            </div>

            <button className="btn">Найти</button>
    </div>
    )
}