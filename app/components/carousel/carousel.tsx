'use client'

import Image from 'next/image';
import styles from './carousel.module.css';
import { IPhotoCarousel } from './carousel.item.interface';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/photoswipe.css';

export default function ImageCarousel({ images }: IPhotoCarousel) {
  
  const duplicatedImages = [...images, ...images];


  return (
    <Gallery
      options={{
        bgOpacity: 1,
        loop: true,
        preload: [1, 2],
        arrowKeys: true,
        closeOnVerticalDrag: true,
        showHideAnimationType: 'fade',
      }}
    >
      <div className={styles['carousel-container']}>
        <div className={styles['carousel-content']}>
          {duplicatedImages.map((image, index) => (
            <div key={index} className={styles['image-wrapper']}>
              <Item
                original={image.original}
                thumbnail={image.thumbnail}
                width={image.width}
                height={image.height}
                alt={image.alt || `Image ${index}`}
              >
                {({ ref, open }) => (
                  <div
                    ref={ref}
                    onClick={(e) => {
                      e.preventDefault();
                      open(e);
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt || `Image ${index}`}
                      width={450}
                      height={250}
                      className={styles['image']}
                    />
                  </div>
                )}
              </Item>
            </div>
          ))}
        </div>
      </div>
    </Gallery>
  );
};