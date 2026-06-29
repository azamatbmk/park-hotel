import styles from "./restaurant-booking.module.css";
import { HOTEL_PHONE, HOTEL_PHONE_HREF } from "../../lib/seo";

export default function RestaurantBookingPhone() {
  return (
    <section className={styles["booking-section"]}>
      <p className={styles["booking-text"]}>
        Забронировать столик для гостей, не проживающих в отеле:
      </p>
      <a className={styles["booking-phone"]} href={HOTEL_PHONE_HREF}>
        {HOTEL_PHONE}
      </a>
    </section>
  );
}
