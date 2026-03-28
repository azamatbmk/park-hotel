import styles from "./h2-header.module.css"

export default function H2HeaderComponent({ children, mobile }: { children: React.ReactNode, mobile?: boolean }) {
    return (
        <div className={`${mobile ? styles['display-none'] : styles['']}`}>
            <h2 className={styles['title']}>{children}</h2>
        </div>
    )
}