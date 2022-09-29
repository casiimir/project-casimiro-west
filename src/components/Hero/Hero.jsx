import HeroSlider, { Slide, MenuNav } from "hero-slider";
import { BsArrowRight } from "react-icons/bs";
import { useState, useEffect } from "react";
import { GET } from "../../utils/api";
import styles from "./index.module.scss";

const Hero = () => {
  const [cityHeroList, setCityHeroList] = useState();

  useEffect(() => {
    GET("cities").then((data) => setCityHeroList(data.slice(0, 6)));
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
              backgroundImageSrc: item.cover_image_url,
              backgroundAnimationDuration: 5000,
              backgroundAnimationDelay: 10,
              backgroundAnimation: `${BackgroundAnimation.ZOOM}`,
            }}
          >
            <h1 className={styles.city}>{item.name.toUpperCase()}</h1>
            <h2 className={styles.country}>{item.country.name}</h2>
            <span className={styles.infoBox}>
              <p className={styles.description}>
                {item.meta_description?.slice(0, 150)}...
              </p>
              <p className={styles.readMore}>
                Read more <BsArrowRight className={styles.arrow} />
              </p>
            </span>
          </Slide>
        ))}
      </HeroSlider>
    </div>
  );
};

export default Hero;
