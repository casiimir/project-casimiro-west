import styles from "./index.module.scss";
import { MdOutlineLocalActivity } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const Card = () => {
  const cardData = {
    name: "Porto",
    background_img:
      "https://images.musement.com/cover/0002/69/porto-jpg_header-168797.jpeg",
    country: "Portugal",
    activities: "423",
  };

  return (
    <div className={styles.Container}>
      <div
        className={styles.Card}
        style={{ backgroundImage: `url(${cardData.background_img})` }}
      >
        <div className={styles.CardInfo}>
          <div className={styles.info}>
            <p className={styles.city}>{cardData.name}</p>
            <p className={styles.country}>{cardData.country}</p>
          </div>
          <div className={styles.footerCard}>
            <div className={styles.activities}>
              <MdOutlineLocalActivity />
              {cardData.activities}
            </div>
            <div className={styles.arrow}>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
