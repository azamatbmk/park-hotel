import { StaticImageData } from "next/image";

export interface ILuxRoomProps {
    sectionClassName?: string;
    mobileImageSrc: StaticImageData;
    leftImageSrc: StaticImageData;
    leftImageSrcReact?: StaticImageData;
    topImageSrc: StaticImageData;
    topImageSrcReact: StaticImageData;
    leftBottobImageSrc: StaticImageData;
    leftBottobImageSrcReact: StaticImageData;
    rightBottomImageSrc: StaticImageData;
    rightBottomImageSrcReact: StaticImageData;
    alt: string;
    h2: string;
    square?: number;
    description: string;
    price: number;
    guests?: string;
    path?: string;
}