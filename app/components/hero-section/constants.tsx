import styles from "./hero-section.module.css"

export const menuItems = [
    { href: '/', title: 'Об отеле' },
    { href: '/rooms', title: 'Номера' },
    { href: '/restaurant', title: 'Ресторан' },
    { href: '/pool', title: 'Бассейн & Баня' },
    { href: '/excursions', title: 'Экскурсии' },
    { href: '/contacts', title: 'Контакты' }
];

export const aboutBackground = <video
                className={styles['video']}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="video/main1.webm" type="video/webm"/>
                Ваш браузер не поддерживает видео
            </video>