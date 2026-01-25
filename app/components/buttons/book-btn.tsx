import styles from "./book-btn.module.css"

export default function BookButton({ buttonText }: { buttonText: string }) {
    return (
        <div>
            <button className={styles['book-btn']}>{buttonText}</button>
        </div>
    )
}