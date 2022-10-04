import styles from "./index.module.scss";
import { GET } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import React, { memo, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Footer from "../Footer";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

import { lazy, Suspense } from "react";

const CardActivity = lazy(() => import("../CardActivity/CardActivity"));
// const Footer = lazy(() => import("../Footer"));

const CruiseActivity = () => {
  const { cruiseActivitiesData } = useSelector((state) => state.categories);
  const data = useOutletContext();
  const dispatch = useDispatch();

  useEffect(() => {
    GET("categories/191/activities?&limit=20").then((data) =>
      dispatch({ type: "SET_CRUISE_ACTIVITIES_DATA", payload: data })
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
        <div className={styles.CruiseActivity}>
          <div className={styles.box}>
            {cruiseActivitiesData?.map((el, i) => (
              <CardActivity key={i} data={el} />
            ))}
          </div>
        </div>
        {/* <Footer /> */}
      </Suspense>
    </>
  );
};

export default memo(CruiseActivity);
