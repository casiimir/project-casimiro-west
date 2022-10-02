import styles from "./index.module.scss";
import { GiPositionMarker } from "react-icons/gi";
import { TbCurrencyDollar } from "react-icons/tb";
import { memo } from "react";
import { Link } from "react-router-dom";

const ActivitiesHomeCard = ({ data }) => {
  return (
    <div className={styles.ActivitiesHomeCard}>
      <img
        className={styles.photo}
        src={`${data?.cover_image_url}`}
        alt="img"
      />

      <section className={styles.tourInfo}>
        <h2 className={styles.name}>{data?.title}</h2>
        <div className={styles.bottom}>
          <div className={styles.infoPlace}>
            <p className={styles.locality}>
              <span className={styles.icon}>
                <GiPositionMarker />
              </span>
              {data?.city.name} - {data?.city.country.name}
            </p>
          </div>
          <p className={styles.price}>
            <TbCurrencyDollar /> {data?.retail_price.value}
          </p>
        </div>
      </section>
      <Link
        to={`/activity/${data.name}`}
        state={data}
        className={styles.link}
      ></Link>
    </div>
  );
};

export default memo(ActivitiesHomeCard);
