import AttractionCard from "../AttractionCard/AttractionCard";
import styles from "./index.module.scss";

const AttractionsList = ({ title, children }) => {
  return (
    <div className={styles.AttractionsList}>
      <h2 className={styles.name}>{title}</h2>
      {children}
      {/* <AttractionCard /> */}
    </div>
  );
};

export default AttractionsList;
