import styles from "./index.module.scss";
import { GET } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import React, { memo, useEffect } from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

import { lazy, Suspense } from "react";

const CardActivity = lazy(() => import("../CardActivity/CardActivity"));

const AirActivity = () => {
  const { airActivitiesData } = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    GET("categories/187/activities?&limit=20").then((data) =>
      dispatch({ type: "SET_AIR_ACTIVITIES_DATA", payload: data })
    );
  }, [dispatch]);

  return (
    <>
      <div className={styles.AirActivity}>
        <div className={styles.box}>
          {airActivitiesData?.map((el, i) => (
            <Suspense
              fallback={
                <Box>
                  <Skeleton variant="rectangular" width={676} height={160} />
                </Box>
              }
            >
              <CardActivity key={i} data={el} />{" "}
            </Suspense>
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(AirActivity);
