import { PhotoGalleryProps } from "../components/photo-gallery/interfaces";
import { PropsArray } from "./tags3";

export const lux3: PropsArray = {
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
            descriptionCount: '2 комнаты',
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

export const thirdLuxFoto: PhotoGalleryProps = {
    images: [
        {
            id: 0,
            src: '/photos/Lux3/P1195123.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        },
        {
            id: 1,
            src: '/photos/Lux3/P1195134.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        },
        {
            id: 2,
            src: '/photos/Lux3/P1195159.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        },
        {
            id: 3,
            src: '/photos/Lux3/P1195207.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        },
        {
            id: 4,
            src: '/photos/Lux3/P1195237.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        },
        {
            id: 5,
            src: '/photos/Lux3/P1195242.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        },
        {
            id: 6,
            src: '/photos/Lux3/P1195252.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        },
        {
            id: 7,
            src: '/photos/Lux3/P1195272.jpg',
            alt: 'Фото',
            width: 1685,
            height: 643,
        }
    ]
}

export const lux1Description: string = 'Однокомнатный номер категории «Люкс» оформлен в современном стиле и оснащён всем необходимым для комфортного проживания. В номере — двуспальная кровать, выход на балкон.'