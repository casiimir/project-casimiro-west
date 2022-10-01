import styles from "./index.module.scss";
import { GET } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import React, { memo, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import CardActivity from "../CardActivity/CardActivity";

const AirActivity = () => {
  const { airActivitiesData } = useSelector((state) => state.categories);
  const data = useOutletContext();
  const dispatch = useDispatch();

  useEffect(() => {
    GET("categories/187/activities?&limit=20").then((data) =>
      dispatch({ type: "SET_AIR_ACTIVITIES_DATA", payload: data })
    );
  }, [dispatch]);

  return (
    <div className={styles.AirActivity}>
      <div className={styles.box}>
        {airActivitiesData?.map((el, i) => (
          <CardActivity key={i} data={el} />
        ))}
      </div>
    </div>
  );
};

export default memo(AirActivity);
