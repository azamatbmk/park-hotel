import styles from "./yandex-map.module.css";
import LazyIframe from "../lazy-iframe/lazy-iframe";

export default function YandexMap() {
    return (
        <div className={styles['panorama-container']}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <LazyIframe
                    title="Карта парк-отеля Дзуарикау на Яндекс.Картах"
                    src="https://yandex.com/map-widget/v1/org/park_otel_dzuarikau/171424752573/?ll=44.388426%2C43.004550&z=17"
                    width="560"
                    height="400"
                    frameBorder="1"
                    allowFullScreen={true}
                    className={styles['panorama']}
                />
            </div>
        </div >
    )
};
