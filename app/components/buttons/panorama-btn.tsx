import Link from "next/link";
import Image from "next/image";
import styles from "./panorama-btn.module.css"

export default function PanoramaButton() {
    return (
        <div className={styles['panorama-btn-container__mobile']}>
            <Link
                className={styles['link']}
                href="https://yandex.ru/map-widget/v1/org/park_otel_dzuarikau/171424752573/panorama/?ll=44.388426%2C43.004550&panorama%5Bdirection%5D=142.760685%2C8.396789&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=44.390028%2C43.004134&panorama%5Bspan%5D=94.340552%2C41.313955&z=17"
            >
                Панорама отеля
                <Image
                    src={'./right-up-arrow-black.svg'}
                    width={15}
                    height={15}
                    alt="Иконка стрелки"
                    style={{ alignSelf: 'center' }}
                />
            </Link>
        </div>
    )
}