import { Outlet } from "react-router-dom";
import AttractionCard from "../../components/AttractionCard/AttractionCard";
import AttractionsList from "../../components/AttractionsList/AttractionsList";
import { BsPerson } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GET } from "../../utils/api";
import { countriesList } from "../../utils/countryAttractions";

const Attractions = () => {
  const { attractionsMost, attractionsHighest, countryList } = useSelector(
    (state) => state.attractions
  );

  const dispatch = useDispatch();

  const HeroImage = {
    first:
      "https://images-sandbox.musement.com/cover/0002/15/venuehero-colosseo-jpg_header-114421.jpeg",
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
          payload: data.filter((el) => el.reviews_number >= 3000),
        }),
      GET("venues?&limit=30").then(
        (data) =>
          dispatch({
            type: "SET_ATTRACTIONS_HIGHEST_DATA",
            payload: data.filter((el) => el.reviews_avg >= 4.5),
          })
        // GET("venues?country_in=").then((data) =>
        //   dispatch({
        //     type: "SET_COUNTRY_LIST_DATA",
        //     payload: data,
        //   })
        // )
      )
    );
  }, [dispatch]);

  // console.log("====>", countryList);

  return (
    <div className={styles.Attractions}>
      <section className={styles.hero}>
        <p className={styles.name}>Attractions</p>
        <div className={styles.imageSection}>
          <img className={styles.image} src={HeroImage.first} alt="" />
        </div>
        <div className={styles.imageSection}>
          <img className={styles.image} src={HeroImage.third} alt="" />
        </div>
        <div className={styles.imageSection}>
          <img className={styles.image} src={HeroImage.fourth} alt="" />
        </div>
        <div className={styles.backgroundGradient}></div>
      </section>

      <h1>Many attractions to choose</h1>

      <section className={styles.main}>
        <AttractionsList title="Most Reviewed">
          {attractionsMost?.map?.((el, i) => (
            <AttractionCard
              number={el.reviews_number}
              city={el.city.name}
              country={el.city.country.name}
              background={el.cover_image_url}
              title={el.name}
              key={i}
              icon={<BsPerson />}
            />
          ))}
        </AttractionsList>

        <AttractionsList title="Highest Average">
          {attractionsHighest?.map?.((el, i) => (
            <AttractionCard
              title={el.name}
              background={el.cover_image_url}
              city={el.city.name}
              country={el.city.country.name}
              number={el.reviews_avg}
              key={i}
              reviewesSpecific="3734"
              icon={<AiOutlineStar />}
            />
          ))}
        </AttractionsList>

        <AttractionsList title="Countries's Attractions">
          {countriesList?.map?.((el, i) => (
            <div className={styles.countrySection} key={i}>
              <h2 className={styles.country}>{el.name}</h2>
            </div>
          ))}
        </AttractionsList>
      </section>
    </div>
  );
};

export default Attractions;
