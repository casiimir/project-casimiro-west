import styles from "./index.module.scss";
import CityCard from "../CityCard";
import { GET } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import React, { createContext, memo, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TopCityCardList = () => {
  const cityData = useSelector((state) => state.cities);

  const cardRef = useRef(null);
  const containerRef = useRef(null);

  const next = () => {
    containerRef.current.scrollLeft += 278;
  };
  const prev = () => {
    containerRef.current.scrollLeft -= 278;
  };

  const dispatch = useDispatch();
  useEffect(() => {
    GET("cities").then((data) =>
      dispatch({
        type: "SET_CITIES_DATA",
        payload: data.filter((el) => el.show_in_popular === true),
      })
    );
  }, [dispatch]);

  const data = { cityData };

  return (
    <div className={styles.box}>
      <button className={styles.button} onClick={prev}>
        <IoIosArrowBack />
      </button>
      <div ref={containerRef} className={styles.TopCityCardList}>
        {cityData?.data?.map((el) => (
          <CityCard key={el.id} CardData={el} />
        ))}
      </div>
      <button className={styles.button} onClick={next}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default memo(TopCityCardList);
