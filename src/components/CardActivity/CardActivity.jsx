import styles from "./index.module.scss";
import { GiPositionMarker } from "react-icons/gi";
import { TbCurrencyDollar } from "react-icons/tb";
import { memo } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../images/placeholder.png";
import { useDispatch } from "react-redux";

const CardActivity = ({ data }) => {
  const dispatch = useDispatch();

  const setActivityFunction = () => {
    dispatch({
      type: "SET_SINGLE_ACTIVITY_DATA",
      payload: data,
    });
  };

  const imgFormatter = (URL, FILTER) => {
    const original = URL.substring(0, URL.length - 6);
    return `${original}${FILTER}`;
  };

  return (
    <div className={styles.CardActivity} onClick={setActivityFunction}>
      {data.cover_image_url !== "" ? (
        <img
          className={styles.photo}
          src={imgFormatter(`${data?.cover_image_url}`, "?w=300")}
          alt="img"
        />
      ) : (
        <img className={styles.photo} src={placeholder} alt="img" />
      )}
      <section className={styles.tourInfo}>
        <h2 className={styles.name}>{data?.title}</h2>
        <div className={styles.description}>
          <p>{data?.description?.split(".", +1) + "."}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.infoPlace}>
            <p className={styles.locality}>
              <span className={styles.icon}>
                <GiPositionMarker />
              </span>{" "}
              {data?.city.name} - {data?.city.country.name}
            </p>
          </div>
          <p className={styles.price}>
            <TbCurrencyDollar /> {data?.retail_price.value}
          </p>
        </div>
      </section>
      <Link
        to={`/activity/${data.title}`}
        state={data}
        className={styles.link}
        onClick={() => window.scrollTo(0, 0)}
      ></Link>
    </div>
  );
};

export default memo(CardActivity);
