import Image from "next/image";
import styles from "./restaurant.module.css"

export default function RestaurantBackground() {
    return (
        <>
            <Image
                className={styles['rest-bg']}
                src={'/photos/restbg.png'}
                alt="Фото ресторана"
                fill
            />
            <h1 className={styles['h1']}>РЕСТОРАН</h1>
        </>
    )
}