import styles from "./index.module.scss";
import { GET } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import React, { memo, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

import { lazy, Suspense } from "react";

const CityCard = lazy(() => import("../CityCard"));

const NoTopCityCardList = () => {
  const cityData = useSelector((state) => state.otherCities);

  const cardRef = useRef(null);
  const containerRef = useRef(null);

  const next = () => {
    containerRef.current.scrollLeft += 278;
  };
  const prev = () => {
    containerRef.current.scrollLeft -= 278;
  };

  const dispatch = useDispatch();
  useEffect(() => {
    GET("cities").then((data) =>
      dispatch({
        type: "SET_OTHER_CITIES_DATA",
        payload: data.filter((el) => el.show_in_popular === false),
      })
    );
  }, [dispatch]);

  return (
    <>
      <div className={styles.box}>
        <button className={styles.buttonPrev} onClick={prev}>
          <IoIosArrowBack />
        </button>
        <div ref={containerRef} className={styles.NoTopCityCardList}>
          {cityData?.data?.map((el) => (
            <Suspense
              fallback={
                <Box>
                  <Skeleton variant="rectangular" width={168} height={240} />
                </Box>
              }
            >
              <CityCard key={el.id} CardData={el} />{" "}
            </Suspense>
          ))}
        </div>{" "}
        <span>
          <button className={styles.button} onClick={next}>
            <IoIosArrowForward />
          </button>{" "}
          <button className={styles.buttonMobile} onClick={prev}>
            <IoIosArrowBack />
          </button>
        </span>
      </div>{" "}
    </>
  );
};

export default memo(NoTopCityCardList);
