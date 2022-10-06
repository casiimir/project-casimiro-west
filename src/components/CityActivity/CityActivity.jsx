import styles from "./index.module.scss";
import { GET } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import React, { memo, useEffect } from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";


import { lazy, Suspense } from "react";

const CardActivity = lazy(() => import("../CardActivity/CardActivity"));


const CityActivity = () => {
  const { cityActivitiesData } = useSelector((state) => state.categories);
    const dispatch = useDispatch();

  useEffect(() => {
    GET("categories/192/activities?&limit=20").then((data) =>
      dispatch({ type: "SET_CITY_ACTIVITIES_DATA", payload: data })
    );
  }, [dispatch]);

  return (
    <>
      <Suspense
        fallback={
          <div className={styles.skeletron}>
            <Box sx={{ width: 1200 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} height={1840} />
            </Box>
          </div>
        }
      >
        <div className={styles.CityActivity}>
          <div className={styles.box}>
            {cityActivitiesData?.map((el, i) => (
              <CardActivity key={i} data={el} />
            ))}
          </div>
        </div>
       
      </Suspense>
    </>
  );
};

export default memo(CityActivity);
