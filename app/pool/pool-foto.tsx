import Image from "next/image"
import styles from "./pool-foto.module.css"

export default function PoolFotoSection( ) {
    return (
        <section className={styles['pool-foto-section']}>
            <div className={styles['one-foto-wrapper']}>
                <Image
                    className={styles['one-foto-wrapper']}
                    src={'/photos/spa7.png'}
                    alt="Фото бассейна"
                    // width={1840}
                    // height={650}
                    fill
                />
            </div>
        </section>
    )
}