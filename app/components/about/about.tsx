import styles from "./about.module.css"

export default function About() {
    return (
        <section className={styles['about-section']}>
            <div>
                <h2 className={styles['section-title']}>Об отеле</h2>
            </div>  
        </section>
    )
}