import { Outlet } from "react-router-dom";
import AttractionCard from "../../components/AttractionCard/AttractionCard";
import AttractionsList from "../../components/AttractionsList/AttractionsList";
import { BsPerson } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GET } from "../../utils/api";
import { countriesWithAttractions } from "../../utils/countriesWithAttractions";

const Attractions = () => {
  const [selectValue, setSelectValue] = useState("");
  const [countryID, setCountryID] = useState("");

  const { attractionsMost, attractionsHighest, countryAttractions } =
    useSelector((state) => state.attractions);

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
      GET("venues?&limit=30").then((data) =>
        dispatch({
          type: "SET_ATTRACTIONS_HIGHEST_DATA",
          payload: data.filter((el) => el.reviews_avg >= 4.5),
        })
      )
    );
  }, [dispatch]);

  useEffect(() => {
    if (selectValue) {
      GET(`venues?country_in=${countryID}`).then((data) =>
        dispatch({
          type: "SET_COUNTRY_DATA",
          payload: data,
        })
      );
    }
  }, [selectValue, setCountryID, countryID]);

  const onHandleSelect = (e) => {
    setSelectValue(e.target.value);
  };

  const settamiID = () => {
    switch (selectValue) {
      case "France":
        setCountryID("60&limit=10");
        break;
      case "Germany":
        setCountryID("64&limit=10");
        break;
      case "Italy":
        setCountryID("82&limit=10");
        break;
      case "Netherlands":
        setCountryID("124&limit=10");
        break;
      case "Russia":
        setCountryID("142&limit=10");
        break;
      case "Spain":
        setCountryID("161&limit=10");
        break;
      case "United Arab Emirates":
        setCountryID("182&limit=10");
        break;
      case "United Kingdom":
        setCountryID("182&limit=10");
        break;
      case "United States of America":
        setCountryID("184&limit=10");
        break;
      default:
        console.log(
          "deve esserci un modo più semplice, ma non ci stai pensando"
        );
    }
  };

  // const onHandleSubmit = (e) => {
  //   e.preventDefault();
  // };

  console.log("ID", countryID);

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

      <h1>Many attractions to see</h1>

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

        <AttractionsList title={"Highest Average"}>
          {attractionsHighest?.map?.((el, i) => (
            <AttractionCard
              title={el.name}
              background={el.cover_image_url}
              city={el.city.name}
              country={el.city.country.name}
              number={el.reviews_avg}
              key={i}
              icon={<AiOutlineStar />}
            />
          ))}
        </AttractionsList>

        <section className={styles.selectSection}>
          <form
            className={styles.countryForm}
            // onSubmit={onHandleSubmit}
          >
            <select
              className={styles.countrySelect}
              onChange={(e) => {
                onHandleSelect(e);
                settamiID();
              }}
            >
              <option defaultValue hidden className={styles.country}>
                Select a Country
              </option>
              {countriesWithAttractions?.map?.((el) => (
                <option className={styles.country} key={el.id} name={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
          </form>
        </section>
      </section>

      {selectValue && (
        <AttractionsList title={selectValue}>
          {countryAttractions?.map?.((el, i) => (
            <AttractionCard
              title={el.name}
              background={el.cover_image_url}
              city={el.city.name}
              country={el.city.country.name}
              key={i}
            />
          ))}
        </AttractionsList>
      )}
    </div>
  );
};

export default Attractions;
