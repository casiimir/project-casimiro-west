import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import { GET } from "../../utils/api.js";
import { useEffect } from "react";
import { FiMapPin } from "react-icons/fi";
import { TbCurrencyDollar } from "react-icons/tb";
import ActivityHomeCard from "../../components/ActivityHomeCard/ActivityHomeCard";

const Activities = () => {
  const ActivitiesData = {
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

  return (
    <div className={styles.ActivityPage}>
      <div className={styles.ActivitiesHero}>
        <p className={styles.HeroTitle}>Activities</p>
        <div className={styles.HeroImg}>
          <img src={ActivitiesData.first.background_img} alt="image" />
        </div>
        <div className={styles.HeroImg}>
          <img src={ActivitiesData.second.background_img} alt="image"></img>
        </div>
        <div className={styles.HeroImg}>
          <img src={ActivitiesData.third.background_img} alt="image" />
        </div>
        <div className={styles.Gradient}>Containerdio</div>
      </div>

      <div className={styles.CardList}>
        <ActivityHomeCard className={styles.Card} />
        <ActivityHomeCard className={styles.Card} />
        <ActivityHomeCard className={styles.Card} />
        <ActivityHomeCard className={styles.Card} />
        <ActivityHomeCard className={styles.Card} />
        <ActivityHomeCard className={styles.Card} />
        <ActivityHomeCard className={styles.Card} />
        <ActivityHomeCard className={styles.Card} />
        <ActivityHomeCard className={styles.Card} />
        <ActivityHomeCard className={styles.Card} />
        <ActivityHomeCard className={styles.Card} />
        <ActivityHomeCard className={styles.Card} />
      </div>
    </div>
  );
};

export default Activities;
