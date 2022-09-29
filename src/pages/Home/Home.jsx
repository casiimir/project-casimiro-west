import ActivitiesHomeList from "../../components/ActivitiesHomeList";
import Hero from "../../components/Hero";
import TopCityCardList from "../../components/TopCityCardList/TopCityCardList";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Hero />
      <TopCityCardList />
    </div>
  );
};

export default Home;
