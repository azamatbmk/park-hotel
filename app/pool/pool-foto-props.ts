import { StaticImageData } from "next/image";

export interface IPoolProops {
    infoBoxLefSide: boolean;
    oneFotoSrc: StaticImageData;
    twoFotoSrcLeft: StaticImageData;
    twoFotoSrcRight: StaticImageData;
    threeFotoSrcOne: StaticImageData;
    threeFotoSrcTwo: StaticImageData;
    threeFotoSrcThree: StaticImageData;
    poolServiceIcon: StaticImageData;
    price:string,
    alt: string;
    h2: string;
    description: string;
    buttonText: string;
    guestsAndTime: string
}

