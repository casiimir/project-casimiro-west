import styles from "./index.module.scss";
import { AiOutlineStar } from "react-icons/ai";

const AttractionPage = () => {
  return (
    <div className={styles.AttractionPage}>
      <section className={styles.hero}>
        <img
          className={styles.image}
          src="https://images-sandbox.musement.com/cover/0001/12/the-met-metropolitan-museum-of-art_header-11063.jpeg"
          alt=""
        />
        <div className={styles.transition}></div>
      </section>
      <section className={styles.main}>
        <div className={styles.info}>
          <h1 className={styles.name}>The Met: Metropolitan Museum of Art</h1>
          <div className={styles.reviews}>
            <p className={styles.infoRev}>
              4.4 <AiOutlineStar />
            </p>
          </div>
        </div>
        <p className={styles.description}>
          The Metropolitan Museum of Art - or just The Met - has one of the
          world’s largest and most famous collections of art at its three sites:
          Fifth Avenue, Met Breuer, and Met Cloisters. Paintings, sculpture,
          fabrics, jewels, pottery, armaments, photographs and musical
          instruments from across history make up just some of the two million
          exhibits on offer at this full-day New York City experience.
        </p>
        <section className={styles.navigate}>
          <h4 className={styles.title}>
            The Metropolitan Museum of Art New York Tickets and Tours 🎫
          </h4>
        </section>
      </section>
    </div>
  );
};

export default AttractionPage;
