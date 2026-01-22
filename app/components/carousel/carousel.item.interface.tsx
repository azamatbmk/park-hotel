export interface IPhoto {
    src: string,
    alt: string,
    title: string
}

export interface IPhotoCarousel {
    images: IPhoto[];
}
