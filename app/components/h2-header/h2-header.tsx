import styles from "./h2-header.module.css"

export default function H2HeaderComponent({ children }: { children: React.ReactNode }) {
    return(
        <div>
            <h2 className={styles['title']}>{children}</h2>
        </div>
    )
}