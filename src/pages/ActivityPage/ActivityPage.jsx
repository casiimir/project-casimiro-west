import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { GiPositionMarker } from "react-icons/gi";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { TbCurrencyDollar } from "react-icons/tb";
import Map from "../../components/Map";
import styles from "./index.module.scss";
import "./mapbox.css";
import Footer from "../../components/Footer";
import { isEditable } from "@testing-library/user-event/dist/utils";
import { style } from "@mui/system";


const ActivityPage = () => {
  const [animation, setAnimation] = useState({
    buttonStyle: "",
    button: `${styles.buttonCart}`,
    addText: `${styles.add}`,
    thanksText: `${styles.thanks}`,
    cartIcon: `${styles.cart}`,
    heartIcon: `${styles.heart}`,
  });
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

  const cartObject = {
    name: `${title}`,
    IMG: `${cover_image_url}`,
    price: `${retail_price.value}`,
  };

  const cartFunction = () => {
    dispatch({
      type: "SET_CART_DATA",
      payload: [

        localStorage.setItem(`${title}@@@`, JSON.stringify(cartObject)),

      ],
    });

    setAnimation({
      buttonStyle: "white",
      button: `${styles.buttonCart}`,
      addText: `${styles.hidden}`,
      thanksText: `${styles.thanksActive}`,
      cartIcon: `${styles.cartActive}`,
      heartIcon: `${styles.heartActive}`,
    });
    setTimeout(() => {
      setAnimation({
        buttonStyle: "",
        button: `${styles.buttonCart}`,
        addText: `${styles.add}`,
        thanksText: `${styles.thanks}`,
        cartIcon: `${styles.cart}`,
        heartIcon: `${styles.heart}`,
      });
    }, 3000);
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
          <div className={styles.topText}>
            <div className={styles.text}>
              <h1>{title}</h1>
              <h2>{description}</h2>
            </div>
            <div className={styles.polaroid}>
              <img
                src={imgFormatter(`${cover_image_url}`, "?w=500")}
                className={styles.polaroidIMG}
              />
              <p>{city.name}</p>
            </div>
          </div>


          <button
            onClick={cartFunction}
            className={animation.button}
            style={{ backgroundColor: `${animation.buttonStyle}` }}
          >
            <FaHeart className={animation.heartIcon} />
            <FaShoppingCart className={animation.cartIcon} />
            <p className={animation.addText}>
              Add to Cart ${retail_price.value}
            </p>
            <p className={animation.thanksText}>Thank You!</p>
          </button>

        </div>
        <div className={styles.info}>
          <p>{about}</p>
        </div>
        <div className={styles.map}>
          {longitude && (
            <>
              <p>
                <GiPositionMarker /> {meeting_point}
              </p>

              <div>
                <div className={styles.mapDisplay}>
                  <Map lng={longitude} lat={latitude} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ActivityPage;

