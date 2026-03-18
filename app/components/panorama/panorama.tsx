import styles from "./panorama.module.css";

export default function PanoramaYandexMap() {
    return (
        <div className={styles['panorama-container']}>
            <a href="https://yandex.ru/maps/org/park_otel_dzuarikau/171424752573/?utm_medium=mapframe&utm_source=maps"
                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
                Парк-отель Дзуарикау
            </a>
            <a href="https://yandex.ru/maps/11021/republic-of-north-ossetia-—-alania/category/hotel/184106414/?utm_medium=mapframe&utm_source=maps"
                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
                Гостиница в Республике Северная Осетия — Алания
            </a>
            <iframe src="https://yandex.ru/map-widget/v1/org/park_otel_dzuarikau/171424752573/panorama/?ll=44.388426%2C43.004550&panorama%5Bdirection%5D=142.760685%2C8.396789&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=44.390028%2C43.004134&panorama%5Bspan%5D=94.340552%2C41.313955&z=17"
                className={styles['panorama']}
                frameBorder="1"
                allowFullScreen={true}
            ></iframe>
        </div >
    )
};