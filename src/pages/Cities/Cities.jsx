import { Outlet } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { GET } from "../../utils/api";
import styles from "./index.module.scss";

const Cities = () => {
  const [cityPageContent, setCityPageContent] = useState();
  const [activityPageContent, setActivityPageContent] = useState();

  useEffect(() => {
    GET("cities").then((data) => setCityPageContent(data[0]));
    GET("cities", "/72/activities").then((data) =>
      setActivityPageContent(data)
    );
  }, []);

  function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = (e) => {
          if (e.deltaY == 0) return;
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
    <div className={styles.Cities}>
      <div className={styles.infoContainer}>
        <img
          src={cityPageContent?.cover_image_url}
          className={styles.cityIMG}
        />
        <h1 className={styles.cityName}>{cityPageContent?.name}</h1>
        <h2 className={styles.countryName}>{cityPageContent?.country.name}</h2>
        <div className={styles.textContainer}>
          <p className={styles.description}>{cityPageContent?.content}</p>
          <p className={styles.description}>
            Things to do in {cityPageContent?.name} :
          </p>
          <p>Activities count {cityPageContent?.activities_count}</p>
          <div className={styles.activityCardContainer} ref={scrollRef}>
            {activityPageContent?.data.map((item, index) => (
              <div key={index} className={styles.activityCard}>
                <img src={item.cover_image_url} />
                <p>{item.title.slice(0, 20)}...</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
