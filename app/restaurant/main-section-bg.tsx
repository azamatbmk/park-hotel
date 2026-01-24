import Image from "next/image";
import styles from "./restaurant.module.css"

export default function RestaurantBacground() {
    return (
        <>
            <Image
                className={styles['rest-bg']}
                src={'/photos/restbg.png'}
                alt="Фото ресторана"
                fill
            />
        </>
    )
}