import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { GET } from "../../utils/api";
import styles from "./index.module.scss";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

import { lazy, Suspense } from "react";

const ActivityHomeCard = lazy(() =>
  import("../../components/ActivityHomeCard/ActivityHomeCard")
);

const Cities = () => {
  const data = useLocation();
  const cardData = useSelector(
    (state) => state.activities.inCityActivitiesData
  );
  const dispatch = useDispatch();
  const { country, name, content, cover_image_url, id } = data.state;

  useEffect(() => {
    GET(`cities/${id}/activities?&limit=20`).then((data) =>
      dispatch({ type: "SET_IN_CITY_ACTIVITIES_DATA", payload: data })
    );
  }, [dispatch, id]);

  function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = (e) => {
          if (e.deltaY === 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "auto",
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }

  const scrollRef = useHorizontalScroll();

  return (
    <div
      className={styles.Cities}
      style={{ backgroundImage: `url(${cover_image_url}?w=2000)` }}
    >
      <div className={styles.infoContainer}>
        <div className={styles.title}>
          <h1 className={styles.cityName}>{name}</h1>
          <h2 className={styles.countryName}>
            <span>{country.name}</span>
          </h2>
        </div>
        <div className={styles.box}>
          <div className={styles.textContainer}>
            <p className={styles.description}>{content.split(".", +2)}.</p>
            <p className={styles.description}>
              Things to do in <span>{name}</span> :
            </p>
          </div>
        </div>
        <div className={styles.activityCardContainer} ref={scrollRef}>
          {cardData?.data?.map((item, index) => (
            <Suspense
              key={index}
              fallback={
                <Box>
                  <Skeleton variant="rectangular" width={200} height={240} />
                </Box>
              }
            >
              <ActivityHomeCard data={item} />
            </Suspense>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cities;
