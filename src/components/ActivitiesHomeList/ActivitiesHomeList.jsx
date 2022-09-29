import { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET } from "../../utils/api";
import ActivityHomeCard from "../ActivityHomeCard/ActivityHomeCard";
import styles from "./index.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ActivitiesHomeList = () => {
  const activitiesData = useSelector((state) => state.activities);

  const dispatch = useDispatch();
  useEffect(() => {
    GET("activities").then((data) =>
      dispatch({ type: "SET_ACTIVITIES_DATA", payload: data })
    );
  }, [dispatch]);

  const containerRef = useRef(null);

  const next = () => {
    containerRef.current.scrollLeft += 437;
  };
  const prev = () => {
    containerRef.current.scrollLeft -= 437;
  };

  return (
    <div className={styles.box}>
      <button className={styles.button} onClick={prev}>
        <IoIosArrowBack />
      </button>
      <div ref={containerRef} className={styles.ActivitiesHomeList}>
        {activitiesData?.data?.data?.map((el, i) => (
          <ActivityHomeCard key={i} data={el} />
        ))}
      </div>
      <button className={styles.button} onClick={next}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default memo(ActivitiesHomeList);
