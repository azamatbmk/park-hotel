import { StaticImageData } from "next/image";

export interface IPoolProops {
    infoBoxLeftSide: boolean;
    oneFotoSrc: StaticImageData;
    twoFotoSrcLeft: StaticImageData;
    twoFotoSrcRight: StaticImageData;
    threeFotoSrcOne: StaticImageData;
    threeFotoSrcTwo: StaticImageData;
    threeFotoSrcThree: StaticImageData;
    mobileFoto: StaticImageData;
    poolServiceIcon: StaticImageData;
    poolServiceIconMobile: StaticImageData;
    price:string,
    alt: string;
    h2: string;
    description: string;
    buttonText: string;
    guestsAndTime: string
}

