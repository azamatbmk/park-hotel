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
            iconSrc: '/right-arrow-tag.svg',
            descriptionCount: 'с 14:00',
            dark: true,
        },
        {
            description: 'Выезд',
            iconSrc: '/left-arrow-tag.svg',
            descriptionCount: 'с 12:00',
            dark: true,
        }
    ]
}

export const lux1Description: string = 'Однокомнатный номер категории «Люкс» оформлен в современном стиле и оснащён всем необходимым для комфортного проживания. В номере — двуспальная кровать, выход на балкон.'