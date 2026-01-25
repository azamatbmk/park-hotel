import { StaticImageData } from "next/image";

export interface ILuxRoomProps {
    sectionClassName?: string;
    leftImageSrc: StaticImageData;
    topImageSrc: StaticImageData;
    leftBottobImageSrc: StaticImageData;
    rightBottomImageSrc: StaticImageData;
    alt: string;
    h2: string;
    square?: number;
    description: string;
    price: number;
    guests?: string;
}