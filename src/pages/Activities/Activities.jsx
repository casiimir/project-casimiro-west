import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import { memo } from "react";

import { NavLink } from "react-router-dom";

const Activities = () => {
  const ActivitiesHeroData = {
    first: {
      background_img:
        "https://images.musement.com/cover/0002/49/fotolia-199353438-subscription-xxl-jpg_header-148705.jpeg?w=2000",
      title: "Seacoast view and MonteCarlo group tour from Nice",
      retail_price: 87,
      name: "Nice",
      country: "France",
    },
    second: {
      background_img:
        "https://images.musement.com/cover/0001/43/washington_header-42349.jpeg?w=2000",
      title: "Odyssey brunch cruise in Washington DC",
      retail_price: 34,
      name: "Washington DC",
      country: "United States of America",
    },
    third: {
      background_img:
        "https://images.musement.com/cover/0002/51/fotolia-98503861-subscription-xxl-jpg_header-150860.jpeg?w=2000",
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
        <p>Discover our activities..</p>
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

      <ul className={styles.list}>
        <li>
          <NavLink
            to={`cruise`}
            className={styles.active}
            style={({ isActive }) => ({
              color: isActive && "#343434",
              borderBottom: isActive && "1px solid #343434",
              transition: isActive ? "0.5s" : "0.5s",
            })}
          >
            Cruise
          </NavLink>
        </li>

        <li>
          <NavLink
            to={`air`}
            className={styles.active}
            style={({ isActive }) => ({
              color: isActive && "#343434",
              borderBottom: isActive && "1px solid #343434",
              transition: isActive ? "0.5s" : "0.5s",
            })}
          >
            Air
          </NavLink>
        </li>

        <li>
          <NavLink
            to={`city`}
            className={styles.active}
            style={({ isActive }) => ({
              color: isActive && "#343434",
              borderBottom: isActive && "1px solid #343434",
              transition: isActive ? "0.5s" : "0.5s",
            })}
          >
            City
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default memo(Activities);
