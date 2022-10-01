import styles from "./index.module.scss";
import { GiPositionMarker } from "react-icons/gi";
import { TbCurrencyDollar } from "react-icons/tb";
import { memo } from "react";

const CardActivity = ({ data }) => {
  return (
    <div className={styles.CardActivity}>
      <img
        className={styles.photo}
        src={`${data?.city.cover_image_url}?w=300`}
        alt="img"
      />
      <section className={styles.tourInfo}>
        <h2 className={styles.name}>{data?.title}</h2>
        <div className={styles.description}>
          <p>{data?.description}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.infoPlace}>
            <p className={styles.locality}>
              <span className={styles.icon}>
                <GiPositionMarker />
              </span>{" "}
              {data?.city.name} - {data?.city.country.name}
            </p>
          </div>
          <p className={styles.price}>
            <TbCurrencyDollar /> {data?.retail_price.value}
          </p>
        </div>
      </section>
    </div>
  );
};

export default memo(CardActivity);
