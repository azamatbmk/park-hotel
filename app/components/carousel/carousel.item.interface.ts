export interface IPhotoProps {
    src: string,
    alt: string,
    original: string;
    thumbnail: string;
    width: number;
    height: number;
}

export interface IPhotoCarousel {
    images: IPhotoProps[];
}

// export interface IGalleryItemProps {
//     original: string;
//     thumbnail: string;
//     width: number;
//     height: number;
//     alt: string;
// }

// export interface IGalleryItems {
//     items: IGalleryItemProps[];
//     images: IPhotoProps[];
// }