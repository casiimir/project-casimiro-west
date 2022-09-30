import styles from "./index.module.scss";
import { BsPerson } from "react-icons/bs";

const AttractionCard = ({ reviewesSpecific, icon }) => {
  return (
    <div className={styles.AttractionCard}>
      <div className={styles.reviews}>
        <p className={styles.reviewsSpecific}>
          {reviewesSpecific} {icon}
        </p>
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>Niagara Falls</h2>
        <p className={styles.locality}>US-città</p>
      </div>
    </div>
  );
};

export default AttractionCard;
