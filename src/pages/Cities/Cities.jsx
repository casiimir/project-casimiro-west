import { Outlet, useLocation, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { GET } from "../../utils/api";
import styles from "./index.module.scss";

const Cities = () => {
  const cityName = useParams();
  const data = useLocation();
  const { activities_count, country, name, content, cover_image_url, id } =
    data.state;

  console.log(data.state);
  const [cityPageContent, setCityPageContent] = useState();
  const [activityPageContent, setActivityPageContent] = useState();

  useEffect(() => {
    GET(`cities/${id}/activities?&limit=20`).then((data) =>
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
  {
    console.log(activityPageContent);
  }
  return (
    <div className={styles.Cities}>
      <div
        className={styles.infoContainer}
        style={{ backgroundImage: `url(${cover_image_url})` }}
      >
        <h1 className={styles.cityName}>{name}</h1>
        <h2 className={styles.countryName}>{country.name}</h2>
        <div className={styles.textContainer}>
          <p className={styles.description}>{content.split("LE 6", +1)}</p>
          <p className={styles.description}>
            Things to do in <span>{name}</span> :
          </p>

          <div className={styles.activityCardContainer} ref={scrollRef}>
            {activityPageContent?.data.map((item, index) => (
              <div key={index} className={styles.activityCard}>
                <img src={`${item.cover_image_url}?w=200`} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
