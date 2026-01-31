import HeroSection from "../components/hero-section/hero-section";
import PagesHeroSectionBackground from "../components/photo-background/photo-background";
import excursionsPageBg from "../../public/photos/excursionsbg.png"
import BookingBlock from "../components/booking/booking";
import H2HeaderComponent from "../components/h2-header/h2-header";
import ExcursionPhotoSection from "./excursion-foto-section";
import styles from "./excursion-foto-section.module.css"
import leftFoto from "../../public/photos/exc1.png"
import rightFoto from "../../public/photos/exc2.png"
import firstFoto from "../../public/photos/exc3.png"
import secondFoto from "../../public/photos/exc4.png"
import thirdFoto from "../../public/photos/exc5.png"

export default function Contacts() {
    return (
        <main style={{ marginBottom: '100px' }}>
            <HeroSection
                background={
                    <PagesHeroSectionBackground
                        src={excursionsPageBg}
                        alt="Фото Даргавс"
                        h2="Экскурсии"
                    />
                }
                bookingBlock={<BookingBlock />}
                overlay={true}
            />
            <H2HeaderComponent children={'Достопримечательности'} />
            <div className={`${styles['two-foto-wrapper']} ${styles['margin-bottom']}`}>
                <ExcursionPhotoSection
                    description={'Природная достопримечательность, расположенная в Куртатинском ущелье Северной Осетии. Он представляет собой узкую расщелину, окруженную высокими скалами, сквозь которые с шумом пробивается река. Вода здесь кристально чистая и прозрачная.'}
                    bgPhoto={leftFoto}
                    alt={'Фото гор'}
                    btnText={'22\u00A0км'}
                    anchor="/">
                    {'Кадаргаванский Каньон'} </ExcursionPhotoSection>
                <ExcursionPhotoSection
                    description={'Духовный и культурный центр Северной Осетии, расположенный в Куртатинском ущелье. Монастырь построен в византийском стиле с использованием горного камня, имеет две старинные сторожевые башни, которые служат колокольней.'}
                    bgPhoto={rightFoto}
                    alt={'Фото монастыря в горах'}
                    btnText={'39\u00A0км'}
                    anchor="/">
                    {'Аланский Успенский монастырь'} </ExcursionPhotoSection>
            </div>
            <div className={styles['two-foto-wrapper']}>
                <ExcursionPhotoSection
                    description={'Памятник литере осетинского алфавита. Фигура высотой около 4 метров выполнена из кованого металла, украшена национальными мотивами и отделана изнутри деревянными рейками.'}
                    bgPhoto={firstFoto}
                    alt={'Фото арт-объекта Æ'}
                    btnText={'33\u00A0км'}
                    anchor="/">
                    {'Арт‑объект Æ'} </ExcursionPhotoSection>
                <ExcursionPhotoSection
                    description={'Смотровая площадка Северной Осетии. По легенде, местный житель в знак своей любви к девушке соорудил лавочку на краю скалы с надписью «Счастье не за горами, оно в горах».'}
                    bgPhoto={secondFoto}
                    alt={'Фото лавочки в горах'}
                    btnText={'44\u00A0км'}
                    anchor="/">
                    {'Лавочка счастья'} </ExcursionPhotoSection>
                <ExcursionPhotoSection
                    description={'Крупнейший средневековый склеповый некрополь. Здесь расположены около сотни семейных усыпальниц. Расположен в километре от селения Даргавс, на склоне горы Раминыраг.'}
                    bgPhoto={thirdFoto}
                    alt={'Фото Даргавса'}
                    btnText={'39\u00A0км'}
                    anchor="/">
                    {'Город мёртвых'} </ExcursionPhotoSection>
            </div>
        </main>
    )
}