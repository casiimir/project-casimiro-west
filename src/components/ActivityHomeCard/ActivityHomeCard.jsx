import styles from "./index.module.scss";
import { GiPositionMarker } from "react-icons/gi";
import { memo } from "react";

const ActivitiesHomeCard = () => {
  return (
    <div className={styles.ActivitiesHomeCard}>
      <img
        className={styles.photo}
        src="https://images.musement.com/cover/0002/49/fotolia-199353438-subscription-xxl-jpg_header-148705.jpeg"
        alt=""
      />
      <h2 className={styles.name}>
        Seacoast view and Monte Carlo group tour from Nice
      </h2>
      <section className={styles.tourInfo}>
        <div className={styles.infoPlace}>
          <p className={styles.icon}>
            <GiPositionMarker />
          </p>
          <p className={styles.locality}>Nice - France</p>
        </div>
        <p className={styles.price}> $ 87.00</p>
      </section>
    </div>
  );
};

export default memo(ActivitiesHomeCard);
