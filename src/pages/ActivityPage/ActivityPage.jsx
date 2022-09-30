import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { GiPositionMarker } from "react-icons/gi";
import { TbCurrencyDollar } from "react-icons/tb";
// import { GET } from "../../utils/api";
import styles from "./index.module.scss";

const ActivityPage = () => {
  const [activityData, setActivityData] = useState();
  const [paletteData, setPaletteData] = useState();

  const GET = async (URL) => {
    const res = await fetch(URL);
    return await res.json();
  };

  useEffect(() => {
    GET("https://sandbox.musement.com/api/v3/activities/148584")
      .then((data) => {
        setActivityData(data);
        return fetch(`${data.cover_image_url}&palette=json`);
      })
      .then((response) => response.json())
      .then((response) => setPaletteData(response));
  }, []);

  return (
    <div
      className={styles.ActivityPage}
      style={{
        backgroundImage: `url(${activityData?.city.cover_image_url}?w=2000&&con=-71)`,
      }}
    >
      <img
        src={`${activityData?.cover_image_url}`}
        className={styles.cityIMG}
      />
      <h2 className={styles.cityName}>{activityData?.city.name}</h2>
      <h1
        className={styles.activityTitle}
        style={{ color: `${paletteData?.dominant_colors.vibrant.hex}` }}
      >
        {activityData?.title}
      </h1>
      <div className={styles.textContainer}>
        {/* <h2 className={styles.cityName}>{activityData?.city.name}</h2> */}
        <h4>
          <GiPositionMarker /> {activityData?.meeting_point}
        </h4>

        <h4>
          <TbCurrencyDollar /> {activityData?.retail_price.value}
        </h4>

        <h3 className={styles.description}>{activityData?.description}</h3>

        <p className={styles.description}>{activityData?.about}</p>
      </div>
    </div>
  );
};

export default ActivityPage;

// 159430   85422   148584
