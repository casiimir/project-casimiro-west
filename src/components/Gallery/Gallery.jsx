import styles from "./index.module.scss";
import { TbArrowWaveRightDown } from "react-icons/tb";

const Gallery = () => {
  return (
    <div className={styles.Gallery}>
      <div className={styles.row}>
        <div className={styles.box}>
          <p>
            France's third largest city, Lyon is the perfect destination for a
            city break or a long weekend. Lyon has plenty to offer: an old city
            classed as a UNESCO World heritage site, fantastic historical and
            architectural landmarks, outstanding museums and a super-dynamic
            cultural life.Gastronomic capital of France, Lyon is well known for
            its world class Michelin starred restaurants and its traditional
            bistrots offering top quality food at reasonable prices. Located
            between the vineyards of Beaujolais and Burgundy to the north, and
            Côtes du Rhône to the south, Lyon is also the place to be to taste
            the best local wines.
          </p>
          <div className={styles.info}>
            <p className={styles.text}>
              <span>Lyon and </span>
              Bordeaux
              <span>
                <TbArrowWaveRightDown />
              </span>
            </p>
          </div>
        </div>
        <div className={styles.photos}>
          <div
            className={styles.photo1}
            style={{
              backgroundImage: `URL(
                https://images-sandbox.musement.com/cover/0002/48/123-jpg_header-147564.jpeg
              )`,
            }}
          ></div>
          <div
            className={styles.photo2}
            style={{
              backgroundImage: `URL(
                https://images-sandbox.musement.com/cover/0001/44/la-bourse-in-bordeaux-the-water-mirror-by-night-jpg_header-43181.jpeg
              )`,
            }}
          ></div>
        </div>
        <div
          className={styles.box2}
          style={{
            backgroundImage: `URL(
                https://images5.alphacoders.com/365/365668.jpg
              )`,
          }}
        ></div>
      </div>{" "}
      <div className={styles.row2}>
        <p>
          Imagine finding yourself surrounded by canals and the feeling of being
          in a “floating city” that rests on the water thanks to the expertise
          and talent of Italy's best-known architects. You'll be in awe of the
          history that has seeped into everything around you.The typical noise
          of city traffic is replaced by the sound of flowing water while
          gondolas and boats take the place of your usual taxi. Getting lost in
          this maze of streets, canals and beautiful buildings is the best way
          to discover the charm of the city that Italians call \"La
          Serenissima\". Your first visit to Venice will make you fall
          hopelessly in love with the city and you will want to come back in
          order to experience and once again be a part of such a surreal place,
          where past and present coexist and feed off on one another. Although
          it still has an intense bond with its history, Venice also shows
          brilliance and foresight in the field of art and architecture.
        </p>
        <div className={styles.info}>
          <p>
            Venice
            <span>
              <TbArrowWaveRightDown />
            </span>
          </p>
        </div>
      </div>
      <div className={styles.row3}>
        <div
          className={styles.photo3}
          style={{
            backgroundImage: `URL(
              https://www.italia.it/content/dam/tdh/site/getty-temp-image/category-nuove/venezia/1600X900_venezia_san_marco_gabbiano.jpg.transform/w_1600/h_900/image.jpeg
              )`,
          }}
        ></div>
        <div
          className={styles.photo4}
          style={{
            backgroundImage: `URL(
                https://images-sandbox.musement.com/cover/0002/49/panoramic-view-of-grand-canal-in-venice-italy-jpg_header-148016.jpeg
              )`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Gallery;
