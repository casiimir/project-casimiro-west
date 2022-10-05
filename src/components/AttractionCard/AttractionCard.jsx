import styles from "./index.module.scss";

const AttractionCard = (props) => {
  return (
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
  );
};

export default AttractionCard;
