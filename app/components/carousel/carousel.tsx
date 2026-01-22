import React from 'react';
import Image from 'next/image';
import styles from './carousel.module.css';
import { IPhotoCarousel } from './carousel.item.interface';

export default function ImageCarousel({ images }: IPhotoCarousel) {
  
  const duplicatedImages = [...images, ...images];

  return (
    <div className={styles['carousel-container']}>
        <div className={styles['carousel-content']}>
            {duplicatedImages.map((image, index) => (
            <div key={index} className={styles['imageWrapper']}>
                <Image
                src={image.src}
                alt={image.alt || `Image ${index}`}
                width={600}
                height={340}
                className={styles['image']}
                />
            </div>
            ))}
        </div>
    </div>
  );
};
