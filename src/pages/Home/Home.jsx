import Hero from "../../components/Hero";
import styles from "./index.module.scss";
import TopCityCardList from "../../components/TopCityCardList/TopCityCardList";
import NoTopCityCardList from "../../components/NoTopCityCardList/NoTopCityCardList";
import ActivitiesHomeList from "../../components/ActivitiesHomeList/ActivitiesHomeList";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Hero />
      <section className={styles.carousels}>
        <h2 className={styles.title}>Top Cities</h2>
        <TopCityCardList />
        <h2 className={styles.title}>Other Cities</h2>
        <NoTopCityCardList />
        <Gallery />
        <h2 className={styles.title}>Top Activities</h2>
        <ActivitiesHomeList />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
