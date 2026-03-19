'use client'

import Image from "next/image";
import styles from "./react-photo-gallery.module.css";
import Link from "next/link";
import { Gallery, Item, useGallery } from 'react-photoswipe-gallery';
import 'photoswipe/photoswipe.css';
import { ILuxRoomProps } from "@/app/rooms/lux-room-props.interface";
import BookButton from "../buttons/book-btn";
import { MouseEvent, useState } from "react";
import MorePlaceButton from "../more-place-button/more-place-button";
import DesktopTag from "../room-tag/desktop-room-tag";
import { desktopTags, desktopTagsOpen } from "./constants";


function MoreFotoButton() {
    const { open } = useGallery();

    return (
        <button
            className={styles['more-foto-btn']}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                open(0);
            }}
        >больше фото</button>
    );
}

export default function LuxRoomReact({
    description,
    price,
    mobileImageSrc,
    leftImageSrc,
    leftImageSrcReact,
    topImageSrc,
    topImageSrcReact,
    leftBottobImageSrc,
    leftBottobImageSrcReact,
    rightBottomImageSrc,
    rightBottomImageSrcReact,
    alt,
    h2,
    square,
    sectionClassName,
    path = '/'
}: ILuxRoomProps) {

    const [toggleOpen, setToggleOpen] = useState<boolean>(false);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const toggleSwitch = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()

        if (!toggleOpen) {
            setToggleOpen(true);
            setIsAnimating(true);


            setTimeout(() => {
                setIsAnimating(false);
            }, 300);
        } else {
            setToggleOpen(false);
        }
    }


    return (
        <>
            <section className={styles['desktop-section']}>
                <Link href={path} >
                    <div className={
                        `${sectionClassName ? styles['foto-section__right'] : styles['foto-section']}`}>
                        <Gallery
                            options={{
                                bgOpacity: 1,
                                showHideAnimationType: 'fade',
                                loop: true,
                                preload: [1, 2],
                                arrowKeys: true,
                                closeOnVerticalDrag: true,
                            }}
                        >
                            <div className={
                                `${sectionClassName
                                    ? styles['foto-container__right']
                                    : styles['foto-container']}`}>
                                <div className={
                                    `${sectionClassName
                                        ? styles['left-foto-wrapper__right']
                                        : styles['left-foto-wrapper']}`}>
                                    <Item
                                        original={leftImageSrcReact?.src}
                                        thumbnail={leftImageSrcReact?.src}
                                        width={leftImageSrcReact?.width}
                                        height={leftImageSrcReact?.height}
                                        alt={alt}
                                    >
                                        {({ ref, open }) => (
                                            <Image
                                                ref={ref}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    open(e);
                                                }}
                                                className={styles['left-image']}
                                                src={leftImageSrc}
                                                alt={alt}
                                                width={445}
                                                height={704}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        )}
                                    </Item>
                                    <Image
                                        className={styles['mobile-image']}
                                        src={mobileImageSrc}
                                        alt={alt}
                                        width={393}
                                        height={250}
                                        quality={100}
                                    />

                                    <MoreFotoButton />
                                </div>
                                <div className={styles['right-column']}>
                                    <div className={
                                        `${sectionClassName
                                            ? styles['top-foto-wrapper__right']
                                            : styles['top-foto-wrapper']}`}>
                                        <Item
                                            original={topImageSrcReact.src}
                                            thumbnail={topImageSrcReact.src}
                                            width={6000}
                                            height={4000}
                                            alt="Фото номера"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    ref={ref}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        open(e);
                                                    }}
                                                    className={styles['top-image']}
                                                    src={topImageSrc}
                                                    alt="Фото номера"
                                                    width={442}
                                                    height={345}
                                                    style={{ cursor: 'pointer' }}
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    <div className={styles['bottom-wrapper']}>
                                        <div className={styles['left-bottom-wrapper']}>
                                            <Item
                                                original={leftBottobImageSrcReact.src}
                                                thumbnail={leftBottobImageSrcReact.src}
                                                width={6000}
                                                height={4000}
                                                alt="Фото номера"
                                            >
                                                {({ ref, open }) => (
                                                    <Image
                                                        ref={ref}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            open(e);
                                                        }}
                                                        className={styles['left-bottom-image']}
                                                        src={leftBottobImageSrc}
                                                        alt="Фото номера"
                                                        width={213}
                                                        height={342}
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                )}
                                            </Item>
                                        </div>
                                        <div className={
                                            `${sectionClassName
                                                ? styles['right-bottom-wrapper__right']
                                                : styles['right-bottom-wrapper']}`}>
                                            <Item
                                                original={rightBottomImageSrcReact.src}
                                                thumbnail={rightBottomImageSrcReact.src}
                                                width={6000}
                                                height={4000}
                                                alt="Фото номера"
                                            >
                                                {({ ref, open }) => (
                                                    <Image
                                                        ref={ref}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            open(e);
                                                        }}
                                                        className={styles['right-bottom-image']}
                                                        src={rightBottomImageSrc}
                                                        alt="Фото номера"
                                                        width={213}
                                                        height={342}
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                )}
                                            </Item>
                                            <span className={styles['span']}>+4</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Gallery>

                        <div className={`${sectionClassName ? styles['description-container__right'] : styles['description-container']}`}>
                            <div className={styles['h2-and-more-place-btn']}>
                                <h2 className={styles['h2']}>
                                    {h2}
                                </h2>
                                <MorePlaceButton />
                            </div>
                            <div className={styles['paragraph-wrapper']}>
                                <Image
                                    src={'./square-white-icon.svg'}
                                    width={20}
                                    height={20}
                                    alt="Иконка квадрата"
                                />
                                <p className={styles['paragraph']}>{square} кв²</p>
                                <Image
                                    src={'./human-icon.svg'}
                                    width={20}
                                    height={20}
                                    alt="Иконка человечек"
                                />
                                <p className={styles['paragraph']}>до 2-х чел. + доп. место</p>
                            </div>
                            <p className={styles['paragraph']}>
                                {description}
                            </p>
                            <div className={styles['desktop-tags-block']}>
                                <div className={styles['desktop-tags-container']}>
                                    {desktopTags.map((tag, index) => {
                                        return (
                                            <DesktopTag key={index}
                                                imageSrc={tag.imageSrc}
                                                width={tag.width}
                                                height={tag.height}
                                                alt={tag.alt}
                                                text={tag.text}
                                            />
                                        )
                                    })}
                                </div>
                                <div className={styles['desktop-tags-container__toggle']}
                                    onClick={toggleSwitch}>

                                    {toggleOpen ? (
                                        <div className={styles['tags-open']}>
                                            {desktopTagsOpen.map((tag, index) => (
                                                <DesktopTag
                                                    key={index}
                                                    imageSrc={tag.imageSrc}
                                                    width={tag.width}
                                                    height={tag.height}
                                                    alt={tag.alt}
                                                    text={tag.text}
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className={`${styles['tag-wrapper']} ${isAnimating ? styles['hidden'] : ''}`}>
                                            + {desktopTagsOpen.length}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={`${sectionClassName ? styles['price__flex-end'] : styles['price']}`}>
                                <div className={styles['price-and-guests']}>
                                    <strong>от {price} ₽</strong>
                                    <span>1 ночь / 2 гостя</span>
                                </div>
                                <BookButton buttonText={'Подробнее'} />
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
        </>
    )
}