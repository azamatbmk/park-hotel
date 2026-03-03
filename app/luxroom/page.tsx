import PhotoGallery from '../components/photo-gallery/photo-gallery'
import { fotoArray } from '../components/photo-gallery/constants'
import styles from './lux-room.module.css'
import BackButton from '../components/back-button/back-button'
import BurgerIcon from '../components/burger-menu/burger-icon'
import BookingBlock from '../components/booking/booking'
import BookingButton from '../components/booking/mobile-booking'

export default function LuxRoomPage () {
    return (
        <div className={styles['lux-room-container']}>
            <BookingButton display='hide-desktop' />
            <BookingBlock display='hide-mobile' position='relative'  />
            <div className={styles['back-button-and-number-wrapper']}>
                <BackButton/>
                <div className={styles['lux-number']}>
                    <p className={styles['gray-p']}>Номера /</p>
                    <p>Люкс 1</p>
                </div>
                <div className={styles['lux-number__mobile']}>
                    <p>Люкс 1</p>
                </div>
                <BurgerIcon black= { true } />
            </div>
            <PhotoGallery
                images={ fotoArray.images }
            />
        </div>
    )
}