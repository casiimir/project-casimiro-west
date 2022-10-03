import { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET } from "../../utils/api";

import styles from "./index.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { lazy, Suspense } from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const ActivityHomeCard = lazy(() =>
  import("../ActivityHomeCard/ActivityHomeCard")
);

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
    <>
      <Suspense
        fallback={
          <Box>
            <Skeleton variant="rectangular" width={1280} height={240} />
          </Box>
        }
      >
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
      </Suspense>
    </>
  );
};

export default memo(ActivitiesHomeList);
