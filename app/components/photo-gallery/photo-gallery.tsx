'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './photo-gallery.module.css';

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!Array.isArray(images)) {
    console.error('Ошибка: images должен быть массивом, получен:', typeof images);
    return <div>Ошибка: неверный формат данных</div>;
  }

  if (images.length === 0) {
    return <div>Нет изображений для отображения</div>;
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImage = images[currentIndex];

  return (
    <div className={styles['galleryContainer']}>
      <div className={styles['mainContent']}>
        <div className={styles['mainImageContainer']}>
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            width={currentImage.width}
            height={currentImage.height}
            className={styles['mainImage']}
            priority
          />
          
          <div 
            onClick={handlePrevious}
            className={`${styles['arrowButton']} ${styles['arrowLeft']}`}
            aria-label="Previous image"
          >
            <Image 
              src="/arrow-left.svg" 
              alt="Previous" 
              width={24} 
              height={24}
              className={styles['arrowIcon']}
            />
          </div>
          
          <button 
            onClick={handleNext}
            className={`${styles['arrowButton']} ${styles['arrowRight']}`}
            aria-label="Next image"
          >
            <Image 
              src="/arrow-right.svg" 
              alt="Next" 
              width={24} 
              height={24}
              className={styles['arrowIcon']}
            />
          </button>
        </div>
      </div>

      <div className={styles['verticalThumbnails']}>
        {images.map((image: GalleryImage, index: number) => (
          <button
            key={image.id}
            onClick={() => setCurrentIndex(index)}
            className={`${styles['verticalThumbnailButton']} ${
              index === currentIndex ? styles['activeVerticalThumbnail'] : ''
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={120}
              height={90}
              className={styles['verticalThumbnailImage']}
            />
          </button>
        ))}
      </div>
    </div>
  );
}