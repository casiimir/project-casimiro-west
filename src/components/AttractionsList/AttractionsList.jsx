import styles from "./index.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";

const AttractionsList = ({ title, children }) => {
  const attractionsListsRef = useRef(null);

  const next = () => {
    attractionsListsRef.current.scrollLeft += 437;
  };

  const prev = () => {
    attractionsListsRef.current.scrollLeft -= 437;
  };

  return (
    <div className={styles.AttractionsList}>
      <h2 className={styles.name}>{title}</h2>
      <div className={styles.container}>
        <button className={styles.button} onClick={prev}>
          <IoIosArrowBack />
        </button>
        <div className={styles.cards}>{children}</div>
        <button className={styles.button} onClick={next}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default AttractionsList;
