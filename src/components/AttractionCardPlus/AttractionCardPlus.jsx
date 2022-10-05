import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const AttractionCardPlus = (props) => {
  return (
    <Link
      to={`/attractions/${props.name}`}
      state={props}
      className={styles.link}
      onClick={() => window.scrollTo(0, 0)}
    >
      <div
        className={styles.AttractionCardPlus}
        style={{ backgroundImage: `url(${props.background}?w=500)` }}
      >
        <div className={styles.reviews}>
          <p className={styles.reviewsSpecific}>
            {props.number}
            {props.icon}
          </p>
        </div>
        <div className={styles.info}>
          <h2 className={styles.name}>{props.title}</h2>
          <p className={styles.locality}>
            {props.country} - {props.city}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AttractionCardPlus;
