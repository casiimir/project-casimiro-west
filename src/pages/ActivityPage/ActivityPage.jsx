import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { GiPositionMarker } from "react-icons/gi";
import { TbCurrencyDollar } from "react-icons/tb";
import Map from "../../components/Map";
import styles from "./index.module.scss";
import "./mapbox.css";
import { isEditable } from "@testing-library/user-event/dist/utils";
import { style } from "@mui/system";


const ActivityPage = () => {
  const data = useLocation();
 

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
      
        localStorage.setItem(`${title}@@@`, JSON.stringify(testObject)),
      ],
    });
  };

  const imgFormatter = (URL, FILTER) => {
    const original = URL.substring(0, URL.length - 6);
    return `${original}${FILTER}`;
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
            <img
              src={imgFormatter(`${cover_image_url}`, "?w=500")}
              className={styles.polaroidIMG} alt="img"
            />
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
          {longitude && (
            <div>
              {/* <div className={styles.mapOverlayLeft}></div>
            <div className={styles.mapOverlayRight}></div> */}
              <div className={styles.mapDisplay}>
                <Map lng={longitude} lat={latitude} />
              </div>
            </div>
          )}
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


//FORMULA MAGICA IMMAGINE
//  const imgFormatter = (URL, FILTER) => {
//   const original = URL.substring(0, URL.length - 6);
//   return `${original}${FILTER}`;
// };
// PRENDERE IMMAGINE
// src={imgFormatter(`${cover_image_url}`, "?w=1000")} <- METTERE LE DIMENSIONI DESIDERATE E/O QUALUNQUE ALTRO FILTR IMGIX
