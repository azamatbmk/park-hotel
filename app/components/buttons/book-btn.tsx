import { MouseEvent } from "react";
import styles from "./book-btn.module.css"

export default function BookButton({ buttonText }: { buttonText: string }) {

    const handleBookClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); 
        e.stopPropagation();
        console.log(e.target)
    };

    return (
        <div>
            <button className={styles['book-btn']} onClick={handleBookClick}>{buttonText}</button>
        </div>
    )
}