import styles from "./index.module.scss";
import { FiArrowUpCircle } from "react-icons/fi";
import { useState, useEffect } from "react";

const ButtonScrollTop = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive("none");
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setActive("block");
      } else setActive("none");
    });
  }, []);

  const scrollTopBtn = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.ButtonScrollTop}>
      <button style={{ display: `${active}` }} onClick={scrollTopBtn}>
        <FiArrowUpCircle />
      </button>
    </div>
  );
};

export default ButtonScrollTop;
