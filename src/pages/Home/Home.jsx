
import Hero from "../../components/Hero";
import TopCityCardList from "../../components/TopCityCardList/TopCityCardList";
import styles from "./index.module.scss";
import TopCityCardList from "../../components/TopCityCardList/TopCityCardList";
import ActivitiesHomeList from "../../components/ActivitiesHomeList/ActivitiesHomeList";


const Home = () => {
  return (
    <div className={styles.Home}>
      <Hero />

      <section className={styles.carousels}>
        <h2 className={styles.title}>Top Cities</h2>
        <TopCityCardList />
        <h2 className={styles.title}>Top Activities</h2>
        <ActivitiesHomeList />
      </section>

      <TopCityCardList />

    </div>
  );
};

export default Home;
