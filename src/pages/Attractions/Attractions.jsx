import { Outlet } from "react-router-dom";
import AttractionCard from "../../components/AttractionCard/AttractionCard";
import AttractionsList from "../../components/AttractionsList/AttractionsList";
import { BsPerson } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GET } from "../../utils/api";

const Attractions = () => {
  const attractionsMostData = useSelector((state) => state.attractionsMost);
  const attractionHighestData = useSelector(
    (state) => state.attractionsHighest
  );
  const dispatch = useDispatch();

  const HeroImage = {
    first:
      "https://images-sandbox.musement.com/cover/0002/15/venuehero-colosseo-jpg_header-114421.jpeg",
    second:
      "https://images-sandbox.musement.com/cover/0001/55/arch-of-triumph-seen-from-inside-in-paris-jpg_header-54611.jpeg",
    third:
      "https://images-sandbox.musement.com/cover/0002/97/england-stonehenge-xl-jpg_header-196786.jpeg",
    fourth:
      "https://images-sandbox.musement.com/cover/0001/47/fotolia-92628979-subscription-monthly-l-jpg_header-46899.jpeg",
  };

  useEffect(() => {
    GET("venues?&limit=20").then(
      (data) =>
        dispatch({
          type: "SET_ATTRACTIONS_MOST_DATA",
          payload: data.filter((el) => el.reviews_number >= 5000),
        }),
      GET("venues?&limit=30").then((data) =>
        dispatch({
          type: "SET_ATTRACTIONS_HIGHEST_DATA",
          payload: data.filter((el) => el.reviews_avg >= 4.5),
        })
      )
    );
  }, [dispatch]);

  console.log(attractionHighestData);

  return (
    <div className={styles.Attractions}>
      <section className={styles.hero}>
        <p className={styles.name}>ATTRACTIONS</p>
        <div className={styles.imageSection}>
          <img className={styles.image} src={HeroImage.first} alt="" />
        </div>
        <div className={styles.imageSection}>
          <img className={styles.image} src={HeroImage.second} alt="" />
        </div>
        <div className={styles.imageSection}>
          <img className={styles.image} src={HeroImage.third} alt="" />
        </div>
        <div className={styles.imageSection}>
          <img className={styles.image} src={HeroImage.fourth} alt="" />
        </div>

        <section className={styles.main}>
          <AttractionsList title="Most Reviewed">
            {attractionsMostData?.data?.map?.((el, i) => (
              <AttractionCard
                number={el.reviews_number}
                city={el.city.name}
                country={el.city.country.iso_code}
                background={el.cover_image_url}
                title={el.name}
                key={i}
                icon={<BsPerson />}
              />
            ))}
          </AttractionsList>

          <AttractionsList title="Highest Average">
            {attractionHighestData?.data?.map?.((el, i) => (
              <AttractionCard
                title={el.name}
                background={el.cover_image_url}
                city={el.city.name}
                country={el.city.country.iso_code}
                number={el.reviews_avg}
                key={i}
                reviewesSpecific="3734"
                icon={<AiOutlineStar />}
              />
            ))}
          </AttractionsList>
        </section>
      </section>
    </div>
  );
};

export default Attractions;
