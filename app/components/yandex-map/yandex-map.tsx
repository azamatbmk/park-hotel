import styles from "./yandex-map.module.css";

export default function YandexMap() {
    return (
        <div className={styles['panorama-container']}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                {/* <a href="https://yandex.com/maps/org/park_otel_dzuarikau/171424752573/?utm_medium=mapframe&utm_source=maps"
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
                    Парк-отель Дзуарикау
                </a>
                <a href="https://yandex.com/maps/11021/republic-of-north-ossetia-—-alania/category/hotel/184106414/?utm_medium=mapframe&utm_source=maps"
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
                    Гостиница в Республике Северная Осетия — Алания
                </a> */}
                <iframe src="https://yandex.com/map-widget/v1/org/park_otel_dzuarikau/171424752573/?ll=44.388426%2C43.004550&z=17"
                    width="560"
                    height="400"
                    frameBorder="1"
                    allowFullScreen={true}
                    className={styles['panorama']}></iframe>
            </div>
        </div >
    )
};