import HeroSlider, { Slide } from "hero-slider";
import { useState, useEffect } from "react";
import { GET } from "../../utils/api";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  const [cityHeroList, setCityHeroList] = useState();

  useEffect(() => {
    GET("cities", "?limit=6").then((data) => setCityHeroList(data));
  }, []);

  const BackgroundAnimation = {
    ZOOM: "zoom",
  };

  return (
    <div className={styles.Hero}>
      <HeroSlider
        height={"100vh"}
        autoplay
        accessability={{
          shouldDisplayButtons: false,
          shouldSlideOnArrowKeypress: false,
        }}
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
        }}
      >
        {cityHeroList?.map((item, index) => (
          <Slide
            className={styles.slide}
            key={index}
            label={item.name}
            background={{
              backgroundImageSrc: `${item.cover_image_url}?w=2000`,
              backgroundAnimationDuration: 5000,
              backgroundAnimationDelay: 10,
              backgroundAnimation: `${BackgroundAnimation.ZOOM}`,
            }}
          >
            <h1 className={styles.city}>{item.name.toUpperCase()}</h1>
            <h2 className={styles.country}>{item.country.name}</h2>
            <span className={styles.infoBox}>
              <p className={styles.description}>{item.meta_description}</p>
              <p className={styles.readMore}>
                <Link
                  to={`/city/${item.name}`}
                  state={item}
                  className={styles.link}
                >
                  <span className={styles.text}>Read more...</span>
                </Link>
              </p>
            </span>
          </Slide>
        ))}
      </HeroSlider>
    </div>
  );
};

export default Hero;
