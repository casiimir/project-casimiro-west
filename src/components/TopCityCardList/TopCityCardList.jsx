
import styles from "./index.module.scss";
import CityCard from "../CityCard";
import { GET } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect, useRef } from "react";

const TopCityCardList = () => {
  const cityData = useSelector((state) => state.cities);

  const cardRef = useRef(null);
  const containerRef = useRef(null);

  const next = () => {
    containerRef.current.scrollLeft += 200
  };
  const prev = () => {
    containerRef.current.scrollLeft -= 200
  };

  const dispatch = useDispatch();
  useEffect(() => {
    GET("cities").then((data) =>
      dispatch({ type: "SET_CITIES_DATA", payload:data.filter((el) => el.show_in_popular === true) })
    );
  }, [dispatch]);

  return (<><button className={styles.button} onClick={prev}>-</button>
      <div  ref={containerRef} className={styles.TopCityCardList}>
        {cityData?.data?.map((el)=> <CityCard key={el.id} CardData={el}/>)}
      </div><button className={styles.button} onClick={next}>+</button></>
  )
};

export default memo(TopCityCardList);

