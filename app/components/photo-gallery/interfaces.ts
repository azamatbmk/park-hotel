export interface PhotoGalleryProps {
  images: {
    id: number;
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}