import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const AttractionCard = (props) => {
  const { data } = props;

  return (
    <Link
      to={`/attractions/${props.title}`}
      state={data}
      className={styles.link}
      onClick={() => window.scrollTo(0, 0)}
    >
      <div
        className={styles.AttractionCard}
        style={
          props.background !== ""
            ? { backgroundImage: `url(${props.background}?w=400)` }
            : {
                backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/200px-Placeholder_view_vector.svg.png)`,
              }
        }
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

export default AttractionCard;
