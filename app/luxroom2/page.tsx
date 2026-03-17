import PhotoGallery from '../components/photo-gallery/photo-gallery'
import { fotoArray } from '../components/photo-gallery/constants'
import styles from './lux-room2.module.css'
import BackButton from '../components/back-button/back-button'
import BurgerIcon from '../components/burger-menu/burger-icon'
import BookingBlock from '../components/booking/booking'
import BookingButton from '../components/booking/mobile-booking'
import Tag from './tags2'
import { arriveTime, lux1, lux1Description, secondLuxFoto } from './constants'
import { roomsDescription } from '../rooms/constants'

export default function LuxRoomSecond () {
    return (
        <div className={styles['lux-room-container']}>
            <BookingButton display='hide-desktop' />
            <BookingBlock display='hide-mobile' position='relative'  />
            <div className={styles['back-button-and-number-wrapper']}>
                <BackButton/>
                <div className={styles['lux-number']}>
                    <p className={styles['gray-p']}>Номера /</p>
                    <p>Люкс 2</p>
                </div>
                <div className={styles['lux-number__mobile']}>
                    <p>Люкс 2</p>
                </div>
                <BurgerIcon black= { true } />
            </div>
            <PhotoGallery
                images={ secondLuxFoto.images }
            />
            <div className={styles['tag-component-container']}>
                <div className={styles['tag-component-wrapper']}>
                    <Tag room={lux1.room} />
                    <Tag room={arriveTime.room} mobile={true} />
                </div>
                <p className={styles['tag-component-container-paragraph']}>{lux1Description}</p>
            </div>

            <h2 className={styles['h2']}>Удобства</h2>
            <div className={styles['facilities-block']}>
                <div className={styles['facilities-container']}>
                    <div className={styles['facilities-wrapper']}>
                        <p>Интернет</p>
                        <div className={styles['ul-wrapper']}>
                            <ul>
                                <li>Wi-Fi</li>
                                <li>Интернет</li>
                            </ul>
                        </div>
                        <p>Кровать</p>
                        <div className={styles['ul-wrapper']}>
                            <ul>
                                <li>Кровать «KingSize»</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles['facilities-wrapper']}>
                        <p>Ванная комната</p>
                        <div className={styles['ul-wrapper']}>
                            <ul>
                                <li>Душ</li>
                                <li>Банные полотенца</li>
                                <li>Туалет</li>
                                <li>Халаты</li>
                                <li>Косметические средства</li>
                                <li>Тапочки</li>
                            </ul>
                        </div>
                
                    </div>
                    <div className={styles['facilities-wrapper']}>
                        <p>Электроника</p>
                        <div className={styles['ul-wrapper']}>
                            <ul>
                                <li>Телевизор</li>
                                <li>Фен</li>
                                <li>Мини-бар</li>
                                <li>Электронные замки</li>
                            </ul>
                        </div>
                    
                    </div>
                </div>




                <div className={styles['facilities-container']}>
                    <div className={styles['facilities-wrapper']}>
                        <p>Мебель</p>
                        <div className={styles['ul-wrapper']}>
                            <ul>
                                <li>Зеркало</li>
                                <li>Рабочий стол</li>
                                <li>Рабочее кресло</li>
                                <li>Шкаф для одежды</li>
                                <li>Тумбы</li>
                                <li>Дизайнерская мебель</li>
                                <li>Балкон</li>
                                <li>Панорамные окна</li>
                            </ul>
                        </div>
                
                    </div>
                    <div className={styles['facilities-wrapper']}>
                        <p>Прочее</p>
                        <div className={styles['ul-wrapper']}>
                            <ul>
                                <li>Бутилированная вода</li>
                                <li>Чайник</li>
                                <li>Чайный набор</li>
                                <li>Стаканы</li>
                                <li>Отопление</li>
                                <li>Уборка номера</li>
                                <li>Парковочное место</li>
                                <li>Вид на горы</li>
                            </ul>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}