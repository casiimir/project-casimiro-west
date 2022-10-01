import styles from "./index.module.scss";
import { GET } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import React, { memo, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import CardActivity from "../CardActivity/CardActivity";
import Footer from "../Footer";

const CityActivity = () => {
  const { cityActivitiesData } = useSelector((state) => state.categories);
  const data = useOutletContext();
  const dispatch = useDispatch();

  useEffect(() => {
    GET("categories/192/activities?&limit=20").then((data) =>
      dispatch({ type: "SET_CITY_ACTIVITIES_DATA", payload: data })
    );
  }, [dispatch]);

  return (
    <>
      <div className={styles.CityActivity}>
        <div className={styles.box}>
          {cityActivitiesData?.map((el, i) => (
            <CardActivity key={i} data={el} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default memo(CityActivity);
