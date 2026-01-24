import styles from "./video-background.module.css"

export default function VideoBackground() {
    return(
        <video
                className={styles['video']}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="video/main1.webm" type="video/webm"/>
                Ваш браузер не поддерживает видео
        </video>
    )
}