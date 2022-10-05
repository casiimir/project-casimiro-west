import styles from "./index.module.scss";
import { AiOutlineStar } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";

const AttractionPage = () => {
  const data = useLocation();
  const {
    name,
    cover_image_url,
    reviews_avg,
    description,
    meta_description,
    url,
    meta_title,
    address,
  } = data.state;

  console.log(data);

  return (
    <>
      <div className={styles.AttractionPage}>
        <section className={styles.hero}>
          <img className={styles.image} src={cover_image_url} alt="" />
          <div className={styles.transition}></div>
        </section>
        <section className={styles.main}>
          <div className={styles.info}>
            <h1 className={styles.name}>{name}</h1>
            <div className={styles.reviews}>
              <p className={styles.infoRev}>
                {reviews_avg} <AiOutlineStar />
              </p>
            </div>
          </div>
          <div className={styles.address}>
            <h3>
              {data.state.city.country.name} - <span>{address}</span>
            </h3>
          </div>
          <p className={styles.description}>
            {description.split(".", +4) + "."}
          </p>
          <div className={styles.photo}>
            <img src={`${data.state.city.cover_image_url}?w=400`} alt="city" />
          </div>
          <section className={styles.navigate}>
            <h2>Ticket</h2>
            <p>{meta_description}</p>
            <h4 className={styles.title}>
              {meta_title} click{" "}
              <a href={url} target="_blank">
                here
              </a>
              ! 🎫
            </h4>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AttractionPage;
