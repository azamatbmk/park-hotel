import OtelixWidget from "../components/otelix-ooking/otelix-booking";
import styles from "./otelix.module.css"

export default function Otelix () {
        return (
                <div className={styles['otelix']}>
                        <OtelixWidget />
                </div>
        )
}