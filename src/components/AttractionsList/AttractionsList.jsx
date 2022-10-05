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
      <button className={styles.buttonPrev} onClick={prev}>
        <IoIosArrowBack />
      </button>
      <div className={styles.cards} ref={attractionsListsRef}>
        {children}
      </div>
      <span>
        <button className={styles.button} onClick={next}>
          <IoIosArrowForward />
        </button>
        <button className={styles.buttonMobile} onClick={prev}>
          <IoIosArrowBack />
        </button>
      </span>
    </div>
  );
};

export default AttractionsList;
