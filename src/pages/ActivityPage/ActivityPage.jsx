import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    GET("https://sandbox.musement.com/api/v3/activities/159430")
      .then((data) => {
        setActivityData(data);
        return fetch(`${data.cover_image_url}&palette=json`);
      })
      .then((response) => response.json())
      .then((response) => setPaletteData(response));
  }, []);

  const dispatch = useDispatch();

  const cartFunction = () => {
    dispatch({
      type: "SET_CART_DATA",
      payload: [
        localStorage.setItem(
          `${activityData.title}`,
          `${activityData.retail_price.value}`
        ),
        localStorage.setItem(
          `${activityData.title}IMG`,
          `${activityData?.cover_image_url}`
        ),
      ],
    });

    // localStorage.setItem(
    //   `${activityData.title}`,
    //   `${activityData.retail_price.value}`
    // );
    // localStorage.setItem(
    //   `${activityData.title}IMG`,
    //   `${activityData?.cover_image_url}`
    // );
  };

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
        <h3 className={styles.description}>{activityData?.description}</h3>
        <p className={styles.description}>{activityData?.about}</p>
        <h4>
          <GiPositionMarker /> {activityData?.meeting_point}
        </h4>
        <div className={styles.priceInfo}>
          <h4>
            <TbCurrencyDollar /> {activityData?.retail_price.value}
          </h4>
          <button onClick={cartFunction}>Aggiungi al carrello</button>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;

// 159430   85422   148584
//recupero img dal localstorage:
//              {Object.values(localStorage)
//                .filter((e) => e.includes("http"))  scrivendo !e.includes("http") prendiamo il prezzo
//               .map((item) => console.log(item))}
// recupero nome attività da localStorage:
//               {Object.keys(localStorage)
//                 .filter((e) => !e.includes("IMG"))
//                 .map((item) => console.log(item))}
