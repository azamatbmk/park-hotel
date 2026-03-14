import Image from "next/image";
import { IDesktopTagProps } from "./desktop-tag-props";
import styles from "./desktop-room-tag.module.css"

export default function DesktopTag ({
    imageSrc,
    text,
    width,
    height,
    alt
}: IDesktopTagProps) {
    return (
        <div className={styles['tags-wrapper']}>
            <Image 
                src={imageSrc}
                width={width}
                height={height}
                alt={alt}
            />
            <p>{text}</p>
        </div>
    )
}