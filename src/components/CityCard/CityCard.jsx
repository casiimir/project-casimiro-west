import styles from "./index.module.scss";
import { MdOutlineLocalActivity } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { memo } from "react";
import { Link } from "react-router-dom";
const CityCard = ({ CardData }) => {
  return (
    <div className={styles.Container}>
      <div
        className={styles.Card}
        style={{ backgroundImage: `url(${CardData.cover_image_url}?w=400)` }}
      >
        <div className={styles.CardInfo}>
          <div className={styles.info}>
            <p className={styles.city}>{CardData.name}</p>
            <p className={styles.country}>{CardData.country.name}</p>
          </div>
          <div className={styles.footerCard}>
            <div className={styles.activities}>
              <MdOutlineLocalActivity />
              {CardData.activities_count}
            </div>
            <div className={styles.arrow}>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      <Link
        to={`/city/${CardData.name}`}
        state={CardData}
        className={styles.link}
        onClick={() => window.scrollTo(0, 0)}
      >{CardData.name}</Link>
    </div>
  );
};

export default memo(CityCard);
