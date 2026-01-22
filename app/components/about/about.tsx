import Image from "next/image"
import styles from "./about.module.css"
import aboutPic from "../../../public/photos/about-1.jpg"

export default function About() {
    return (
        <section className={styles['about-section']}>
            <div>
                <h2 className={styles['title']}>Об отеле</h2>
            </div>
            <div className={styles['section-photo']}>
                <Image 
                    className={styles['photo']}
                    src={aboutPic}
                    alt="Фото об отеле"
                />
                <div className={styles['h5-and-p-box']}>
                    <h5 className={styles['h5']}>Об отеле</h5>
                    <p className={styles['paragraph']}>
                        Парк-отель «Дзуарикау» расположен в живописном уголке Осетии, недалеко от Владикавказа и вблизи живописного поселка Фиагдон. Это идеальное место для отдыха на природе — в тишине, среди гор и чистого воздуха. Уютные номера, гостеприимная атмосфера и красота окружающих пейзажей сделают ваш отдых по-настоящему особенным.
                    </p>
                </div>
            </div>
        </section>
    )
}