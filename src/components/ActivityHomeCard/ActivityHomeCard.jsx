import styles from "./index.module.scss";
import { GiPositionMarker } from "react-icons/gi";
import { TbCurrencyDollar } from "react-icons/tb";
import { memo } from "react";
import { TbCurrencyDollar } from "react-icons/tb";

const ActivitiesHomeCard = ({ data, ref }) => {
  return (

    <div ref={ref} className={styles.ActivitiesHomeCard}>
      <img className={styles.photo} src={data.city.cover_image_url} alt="img" />

      <section className={styles.tourInfo}>
        <h2 className={styles.name}>{data.title}</h2>

    <div className={styles.ActivitiesHomeCard}>
      <img
        className={styles.photo}
        src={
          "https://images.musement.com/cover/0002/49/fotolia-199353438-subscription-xxl-jpg_header-148705.jpeg"
        }
        alt="img"
      />

      <section className={styles.tourInfo}>
        <h2 className={styles.name}>
          Seacoast view and Monte Carlo group tour from Nice
        </h2>

        <div className={styles.bottom}>
          <div className={styles.infoPlace}>
            <p className={styles.icon}>
              <GiPositionMarker />
            </p>

            <p className={styles.locality}>
              {data.city.name} - {data.city.country.name}
            </p>
          </div>
          <p className={styles.price}> <TbCurrencyDollar/> {data.retail_price.value}</p>

            <p className={styles.locality}>Nice - France</p>
          </div>
          <TbCurrencyDollar />
          <p className={styles.price}> 87</p>

        </div>
      </section>
    </div>
  );
};

export default memo(ActivitiesHomeCard);
