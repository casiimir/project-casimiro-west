import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiPositionMarker } from "react-icons/gi";
import { TbCurrencyDollar } from "react-icons/tb";
import Map from "../../components/Map";
import styles from "./index.module.scss";

const ActivityPage = () => {
  const data = useLocation();
  const activityData = useSelector((state) => state.SingleActivity);

  const dispatch = useDispatch();

  const {
    title,
    description,
    cover_image_url,
    about,
    meeting_point,
    longitude,
    latitude,
    city,
    retail_price,
  } = data.state;

  const testObject = {
    name: `${title}`,
    IMG: `${cover_image_url}`,
    price: `${retail_price.value}`,
  };

  const cartFunction = () => {
    dispatch({
      type: "SET_CART_DATA",
      payload: [
        // localStorage.setItem(`${title}`, `${retail_price.value}`),
        // localStorage.setItem(`${title}IMG`, `${cover_image_url}`),
        localStorage.setItem(`${title}@@@`, JSON.stringify(testObject)),
      ],
    });
  };

  return (
    <>
      <div className={styles.ActivityPage}>
        <div
          className={styles.topSection}
          style={{
            "--i": `url(${city.cover_image_url}?w=2000&blur=50&con=-71)`,
          }}
        >
          <div className={styles.text}>
            <h1>{title}</h1>
            <h2>{description}</h2>
          </div>
          <div className={styles.polaroid}>
            <img src={`${cover_image_url}`} className={styles.polaroidIMG} />
            <p>{city.name}</p>
          </div>
        </div>
        <div className={styles.info}>
          <p>{about}</p>
        </div>
        <div className={styles.map}>
          <p>
            <GiPositionMarker /> {meeting_point}
          </p>

          {longitude && <Map long={longitude} lati={latitude} />}
        </div>
        <div className={styles.priceInfo}>
          <span>
            <TbCurrencyDollar /> {retail_price.value}
          </span>
          <button onClick={cartFunction}>Aggiungi al carrello</button>
        </div>
      </div>
    </>
  );
};

export default ActivityPage;

// 159430   85422   148584
