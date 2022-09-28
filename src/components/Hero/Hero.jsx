import HeroSlider, { Slide, MenuNav } from "hero-slider";
import TopCityCardList from "../TopCityCardList/TopCityCardList";
import styles from "./index.module.scss";

const Hero = () => {
  const data = [
    {
      name: "Amsterdam",
      country: {
        name: "Netherlands",
      },
      cover_image_url:
        "https://images-sandbox.musement.com/cover/0002/15/amsterdam_header-114429.jpeg",
    },
    {
      name: "Paris",
      country: {
        name: "France",
      },
      cover_image_url:
        "https://images-sandbox.musement.com/cover/0002/49/aerial-wide-angle-cityscape-view-of-paris-xxl-jpg_header-148745.jpeg",
    },
    {
      name: "Rome",
      country: {
        name: "Italy",
      },
      cover_image_url:
        "https://images-sandbox.musement.com/cover/0002/37/top-view-of-rome-city-skyline-from-castel-sant-angelo-jpg_header-136539.jpeg",
    },
    {
      name: "Milan",
      country: {
        name: "Italy",
      },
      cover_image_url:
        "https://images-sandbox.musement.com/cover/0002/39/milan-vittorio-emanuele-ii-gallery-italy-jpg_header-138313.jpeg",
    },
  ];

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
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        {data.map((item, index) => (
          <Slide
            label={item.name}
            background={{
              backgroundImageSrc: item.cover_image_url,
              backgroundAnimationDuration: 5000,
              backgroundAnimationDelay: 10,
              backgroundAnimation: `${BackgroundAnimation.ZOOM}`,
            }}
          >
            <h1 className={styles.city}>{item.name}</h1>
            {console.log(item)}
            <h2 className={styles.country}>{item.country.name}</h2>
          </Slide>
        ))}
      </HeroSlider>
      <TopCityCardList />
    </div>
  );
};

export default Hero;
