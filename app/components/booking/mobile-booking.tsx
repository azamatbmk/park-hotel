import styles from './mobile-booking.module.css'

export default function BookingButton({ display }: { display?: 'hide-mobile' | 'hide-desktop'}) {

    return (
        <div className={[styles['booking-form'], styles[`${ display }`]].join(' ')}>
            <div className={styles['form-wrapper']}>
                <div className={styles['input-wrapper']}>
                    <p className={styles['p-inside']}>от 12000 ₽</p>
                    <span className={styles['label-inside']}>1 ночь / 2 гостя</span>
                </div>
                <button className={styles['btn']}>Забронировать</button>
            </div>
        </div>
    )
}