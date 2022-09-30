import { Outlet } from "react-router-dom";
import AttractionCard from "../../components/AttractionCard/AttractionCard";
import AttractionsList from "../../components/AttractionsList/AttractionsList";
import { BsPerson } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import styles from "./index.module.scss";

const Attractions = () => {
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
            <AttractionCard reviewesSpecific="3734" icon={<BsPerson />} />
          </AttractionsList>
          <AttractionsList title="Highest Average">
            <AttractionCard reviewesSpecific="3734" icon={<AiOutlineStar />} />
          </AttractionsList>
        </section>
      </section>
    </div>
  );
};

export default Attractions;
