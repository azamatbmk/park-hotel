import { StaticImageData } from "next/image";

export interface IAboutProps {
    children: React.ReactNode;
    description: string;
    descriptionPartOne?: string;
    descriptionPartTwo?: string;
    bgPhoto: StaticImageData;
    alt: string;
    anchor: string;
    btnText?: string;
    icon?: React.ReactNode;
}