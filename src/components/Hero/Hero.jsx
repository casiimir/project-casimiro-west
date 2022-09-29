import HeroSlider, { Slide, MenuNav } from "hero-slider";
import { BsArrowRight } from "react-icons/bs";
import styles from "./index.module.scss";

const Hero = () => {
  const data = [
    {
      name: "Amsterdam",
      country: {
        name: "Netherlands",
      },
      meta_description:
        "Find out what’s happening in Amsterdam, Netherlands, and book your tickets for the best museums and shows in advance. Skip the line, make your trip more enjoyable. Museums, shows, classical concerts at your fingertips.",
      cover_image_url:
        "https://images-sandbox.musement.com/cover/0002/15/amsterdam_header-114429.jpeg",
    },
    {
      name: "Paris",
      country: {
        name: "France",
      },
      meta_description:
        "Musement is the place to go if you want to book tickets for all the top museums, tours and art shows in Paris. Find and book all your tickets at once, skip the line and enjoy your tour.",
      cover_image_url:
        "https://images-sandbox.musement.com/cover/0002/49/aerial-wide-angle-cityscape-view-of-paris-xxl-jpg_header-148745.jpeg",
    },
    {
      name: "Rome",
      country: {
        name: "Italy",
      },
      meta_description:
        "Find out what’s happening in Rome and book your tickets for the best museums and operas in advance. Skip the lines, make your trip more enjoyable.",
      cover_image_url:
        "https://images-sandbox.musement.com/cover/0002/37/top-view-of-rome-city-skyline-from-castel-sant-angelo-jpg_header-136539.jpeg",
    },
    {
      name: "Milan",
      country: {
        name: "Italy",
      },
      meta_description:
        "Find out what’s happening in Milan and book your tickets for the best museums and operas in advance. Skip the line, make your trip more enjoyable. Museums, opera, classical concerts at your fingertips.",
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
        }}
      >
        {data.map((item, index) => (
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
                {item.meta_description.slice(0, 150)}...
              </p>
              <p className={styles.readMore}>
                Read more <BsArrowRight className={styles.arrow} />
              </p>
            </span>
          </Slide>
        ))}

        {/* <MenuNav /> */}
      </HeroSlider>
     
    </div>
  );
};

export default Hero;
