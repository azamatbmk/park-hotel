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
import Otelix from "../otelix/page";

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
                // bookingBlock={<Otelix />}
                overlay={true}
            />
            <H2HeaderComponent children={'Экскурсии'} />
            <div className={`${styles['two-foto-wrapper']} ${styles['margin-bottom']}`}>
                <ExcursionPhotoSection
                    description={'Природная достопримечательность, расположенная в Куртатинском ущелье Северной Осетии. Он\u00A0представляет собой узкую расщелину, окруженную высокими скалами, сквозь которые с\u00A0шумом пробивается река. Вода здесь кристально чистая и\u00A0прозрачная.'}
                    bgPhoto={leftFoto}
                    alt={'Фото гор'}
                    btnText={'22\u00A0км'}
                    anchor="/">
                    {'Кадаргаванский Каньон'} </ExcursionPhotoSection>
                <ExcursionPhotoSection
                    description={'Духовный и\u00A0культурный центр Северной Осетии, расположенный в\u00A0Куртатинском ущелье. Монастырь построен в\u00A0византийском стиле с\u00A0использованием горного камня, имеет две старинные сторожевые башни, которые служат колокольней.'}
                    bgPhoto={rightFoto}
                    alt={'Фото монастыря в горах'}
                    btnText={'39\u00A0км'}
                    anchor="/">
                    {'Аланский Успенский монастырь'} </ExcursionPhotoSection>
            </div>
            <div className={styles['two-foto-wrapper']}>
                <ExcursionPhotoSection
                    description={'Памятник литере осетинского алфавита. Фигура высотой около 4 метров выполнена из\u00A0кованого металла, украшена национальными мотивами и\u00A0отделана изнутри деревянными рейками.'}
                    bgPhoto={firstFoto}
                    alt={'Фото арт-объекта Æ'}
                    btnText={'33\u00A0км'}
                    anchor="/">
                    {'Арт‑объект Æ'} </ExcursionPhotoSection>
                <ExcursionPhotoSection
                    description={'Смотровая площадка Северной Осетии. По\u00A0легенде, местный житель в\u00A0знак своей любви к\u00A0девушке соорудил лавочку на\u00A0краю скалы с\u00A0надписью «Счастье не\u00A0за\u00A0горами, оно в\u00A0горах».'}
                    bgPhoto={secondFoto}
                    alt={'Фото лавочки в горах'}
                    btnText={'44\u00A0км'}
                    anchor="/">
                    {'Лавочка счастья'} </ExcursionPhotoSection>
                <ExcursionPhotoSection
                    description={'Крупнейший средневековый склеповый некрополь. Здесь расположены около сотни семейных усыпальниц. Расположен в\u00A0километре от\u00A0селения Даргавс, на\u00A0склоне горы Раминыраг.'}
                    bgPhoto={thirdFoto}
                    alt={'Фото Даргавса'}
                    btnText={'39\u00A0км'}
                    anchor="/">
                    {'Город мёртвых'} </ExcursionPhotoSection>
            </div>
        </main>
    )
}