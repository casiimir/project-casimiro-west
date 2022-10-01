import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import { GET } from "../../utils/api.js";
import { useRef, memo, useEffect } from "react";
import { FiMapPin } from "react-icons/fi";
import { TbCurrencyDollar } from "react-icons/tb";
import ActivityHomeCard from "../../components/ActivityHomeCard/ActivityHomeCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";

const Activities = () => {
  const ActivitiesHeroData = {
    first: {
      background_img:
        "https://images.musement.com/cover/0002/49/fotolia-199353438-subscription-xxl-jpg_header-148705.jpeg",
      title: "Seacoast view and MonteCarlo group tour from Nice",
      retail_price: 87,
      name: "Nice",
      country: "France",
    },
    second: {
      background_img:
        "https://images.musement.com/cover/0001/43/washington_header-42349.jpeg",
      title: "Odyssey brunch cruise in Washington DC",
      retail_price: 34,
      name: "Washington DC",
      country: "United States of America",
    },
    third: {
      background_img:
        "https://images.musement.com/cover/0002/51/fotolia-98503861-subscription-xxl-jpg_header-150860.jpeg",
      title: "Cave Buggy Tour",
      retail_price: 95,
      name: "Punta Cana",
      country: "Dominican Republic",
    },
  };

  const { cruiseActivitiesData, airActivitiesData, cityActivitiesData } =
    useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    GET("categories/191/activities?&limit=15").then((data) =>
      dispatch({ type: "SET_CRUISE_ACTIVITIES_DATA", payload: data })
    );

    GET("categories/187/activities?&limit=15").then((data) =>
      dispatch({ type: "SET_AIR_ACTIVITIES_DATA", payload: data })
    );

    GET("categories/192/activities?&limit=15").then((data) =>
      dispatch({ type: "SET_CITY_ACTIVITIES_DATA", payload: data })
    );
  }, [dispatch]);

  console.log(cityActivitiesData);

  const cruiseRef = useRef(null);
  const airRef = useRef(null);
  const cityRef = useRef(null);

  const next = () => {
    cruiseRef.current.scrollLeft += 437;
  };

  const prev = () => {
    cruiseRef.current.scrollLeft -= 437;
  };

  const nextAir = () => {
    airRef.current.scrollLeft += 437;
  };

  const prevAir = () => {
    airRef.current.scrollLeft -= 437;
  };
  const nextCity = () => {
    cityRef.current.scrollLeft += 437;
  };

  const prevCity = () => {
    cityRef.current.scrollLeft -= 437;
  };

  return (
    <div className={styles.ActivityPage}>
      <div className={styles.ActivitiesHero}>
        <p className={styles.HeroTitle}>Activities</p>
        <div className={styles.HeroImg}>
          <img src={ActivitiesHeroData.first.background_img} alt="card" />
        </div>
        <div className={styles.HeroImg}>
          <img src={ActivitiesHeroData.second.background_img} alt="card"></img>
        </div>
        <div className={styles.HeroImg}>
          <img src={ActivitiesHeroData.third.background_img} alt="card" />
        </div>
        <div className={styles.backgroundGradient}></div>
      </div>
      <h1>Scopri le nostre attività</h1>
      <div className={styles.CategoriesList}>
        <h2>Crociere</h2>
        <div className={styles.container}>
          <button className={styles.button} onClick={prev}>
            <IoIosArrowBack />
          </button>
          <div ref={cruiseRef} className={styles.CardList}>
            {cruiseActivitiesData?.map((el, i) => (
              <ActivityHomeCard key={i} data={el} />
            ))}
          </div>
          <button className={styles.button} onClick={next}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className={styles.CategoriesList}>
        <h2>Attività aeree</h2>
        <div className={styles.container}>
          <button className={styles.button} onClick={prevAir}>
            <IoIosArrowBack />
          </button>

          <div ref={airRef} className={styles.CardList}>
            {airActivitiesData?.map((el, i) => (
              <ActivityHomeCard key={i} data={el} />
            ))}
          </div>
          <button className={styles.button} onClick={nextAir}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className={styles.CategoriesList}>
        <h2>Attività in città</h2>
        <div className={styles.container}>
          <button className={styles.button} onClick={prevCity}>
            <IoIosArrowBack />
          </button>
          <div ref={cityRef} className={styles.CardList}>
            {cityActivitiesData?.map((el, i) => (
              <ActivityHomeCard key={i} data={el} />
            ))}
          </div>
          <button className={styles.button} onClick={nextCity}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Activities);
