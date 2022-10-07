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
      <div className={styles.CityActivity}>
        <div className={styles.box}>
          {cityActivitiesData?.map((el, i) => (
            <Suspense
              key={i}
              fallback={
                <Box>
                  <Skeleton variant="rectangular" width={676} height={160} />
                </Box>
              }
            >
              <CardActivity data={el} />
            </Suspense>
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(CityActivity);
