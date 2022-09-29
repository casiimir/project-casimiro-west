import { memo, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET } from "../../utils/api";
import ActivityHomeCard from "../ActivityHomeCard/ActivityHomeCard";
import styles from "./index.module.scss";

const ActivitiesHomeList = () => {
  const activitiesData = useSelector((state) => state.activities);

  const dispatch = useDispatch();
  useEffect(() => {
    GET("activities").then((data) =>
      dispatch({ type: "SET_ACTIVITIES_DATA", payload: data })
    );
  }, [dispatch]);

  const cardRef = useRef(null);
  const containerRef = useRef(null);

  const next = () => {
    containerRef.current.scrollLeft += 200
  };
  const prev = () => {
    containerRef.current.scrollLeft -= 200
  };

  return (<><button className={styles.button} onClick={prev}>-</button>
    <div ref={containerRef} className={styles.ActivitiesHomeList}>
      
      
      {activitiesData?.data?.data?.map((el, i) => (
        <ActivityHomeCard key={i} data={el} />
      ))}
    </div><button className={styles.button} onClick={next}>+</button></>
  );
};

export default memo(ActivitiesHomeList);
