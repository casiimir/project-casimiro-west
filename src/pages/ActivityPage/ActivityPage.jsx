import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiPositionMarker } from "react-icons/gi";
import { TbCurrencyDollar } from "react-icons/tb";
import Map from "../../components/Map";
import styles from "./index.module.scss";

const ActivityPage = () => {
  const [activityData, setActivityData] = useState();

  const GET = async (URL) => {
    const res = await fetch(URL);
    return await res.json();
  };

  useEffect(() => {
    GET("https://sandbox.musement.com/api/v3/activities/85422").then((data) => {
      setActivityData(data);
    });
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
  };

  return (
    <div className={styles.ActivityPage}>
      <div
        className={styles.topSection}
        style={{
          "--i": `url(${activityData?.city.cover_image_url}?w=2000&blur=50&con=-71)`,
        }}
      >
        <div className={styles.text}>
          <h1>{activityData?.title}</h1>
          <h2>{activityData?.description}</h2>
        </div>
        <div className={styles.polaroid}>
          <img
            src={`${activityData?.cover_image_url}`}
            className={styles.polaroidIMG}
          />
          <p>{activityData?.city.name}</p>
        </div>
      </div>
      <div className={styles.info}>
        <p>{activityData?.about}</p>
      </div>
      <div className={styles.map}>
        <p>
          <GiPositionMarker /> {activityData?.meeting_point}
        </p>
        {activityData?.longitude && (
          <Map long={activityData?.longitude} lati={activityData?.latitude} />
        )}
      </div>
      <div className={styles.priceInfo}>
        <span>
          <TbCurrencyDollar /> {activityData?.retail_price.value}
        </span>
        <button onClick={cartFunction}>Aggiungi al carrello</button>
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
