import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const AttractionCard = (props) => {
  const { data } = props;

  return (

    <Link
      to={`/attractions/${props.title}`}

      state={data}

      className={styles.link}
      onClick={() => window.scrollTo(0, 0)}

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
    
    </Link>
  );
};

export default AttractionCard;
