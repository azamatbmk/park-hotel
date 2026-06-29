import styles from "./video-background.module.css"

export default function VideoBackground() {
    return(
        <video
                className={styles['video']}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/photos/aboutbg.jpg"
                aria-label="Видео парк-отеля Дзуарикау среди гор"
            >
                <source src="video/main1.webm" type="video/webm"/>
                Ваш браузер не поддерживает видео
        </video>
    )
}