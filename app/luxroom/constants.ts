import { PhotoGalleryProps } from "../components/photo-gallery/interfaces";
import { PropsArray } from "./tags";

export const lux1: PropsArray = {
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


export const firstLuxFoto: PhotoGalleryProps = {
    images: [
        {
            id: 0,
            src: '/photos/Lux1/722.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        },
        {
            id: 1,
            src: '/photos/Lux1/734.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        },
        {
            id: 2,
            src: '/photos/Lux1/835.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        },
        {
            id: 3,
            src: '/photos/Lux1/846.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        }
    ]
}

export const lux1Description: string = 'Однокомнатный номер категории «Люкс» оформлен в\u00A0современном стиле и\u00A0оснащён всем необходимым для\u00A0комфортного проживания. В\u00A0номере — двуспальная кровать, выход на балкон.'