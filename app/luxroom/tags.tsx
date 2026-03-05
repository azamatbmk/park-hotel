import Image from 'next/image';
import styles from './tags.module.css';

export interface ITagProps {
    description: string;
    iconSrc: string;
    descriptionCount: string;
    dark: boolean;
}

export interface PropsArray {
    room: ITagProps[]
    mobile?: boolean;
}

export default function Tag ({ room, mobile }: PropsArray) {
    return (
        <div className={`${ mobile ? styles['tag-container__dark'] : styles['tag-container']}`}>
            {room.map((item, index) => (
                <div key={index} className={`${ item.dark ? styles['tag-wrapper__dark'] : styles['tag-wrapper']}`}>
                    <p>{item.description}</p>
                    <Image
                        src={item.iconSrc}
                        alt='Фото номера'
                        width={20}
                        height={20}
                    />
                    <p>{item.descriptionCount}</p>
                </div>
                )
            )}
        </div>
    )
}