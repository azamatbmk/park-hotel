import { PhotoGalleryProps } from "../components/photo-gallery/interfaces";
import { PropsArray } from "./tags2";

export const lux2: PropsArray = {
    room: [
        {
            description: 'Размер',
            iconSrc: '/square-tag.svg',
            descriptionCount: '32 кв. м',
            dark: false,
        },
        {
            description: 'Вместимость',
            iconSrc: '/human-tag.svg',
            descriptionCount: 'до 2 человек',
            dark: false,
        },
        {
            description: 'Комнаты',
            iconSrc: '/union-square-tag.svg',
            descriptionCount: '1 комната',
            dark: false,
        }
    ]
}


export const arriveTime: PropsArray = {
    room: [
        {
            description: 'Заезд',
            iconSrc: '/right-arrow-tag-white.svg',
            descriptionCount: 'с 14:00',
            dark: true,
        },
        {
            description: 'Выезд',
            iconSrc: '/left-arrow-tag-white.svg',
            descriptionCount: 'до 12:00',
            dark: true,
        }
    ]
}

export const secondLuxFoto: PhotoGalleryProps = {
    images: [
        {
            id: 0,
            src: '/photos/Lux2/P1194667.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        },
        {
            id: 1,
            src: '/photos/Lux2/P1194895.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        },
        {
            id: 2,
            src: '/photos/Lux2/P1195008.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        },
        {
            id: 3,
            src: '/photos/Lux2/P1195030.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        },
        {
            id: 4,
            src: '/photos/Lux2/P1195032.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        },
        {
            id: 5,
            src: '/photos/Lux2/P1195069.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        },
        {
            id: 6,
            src: '/photos/Lux2/P1195071.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        }
    ]
}

export const lux1Description: string = 'Однокомнатный номер категории «Люкс» оформлен в\u00A0современном стиле и\u00A0оснащён всем необходимым для\u00A0комфортного проживания. В\u00A0номере — двуспальная кровать, выход на балкон.'