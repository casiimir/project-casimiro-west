import styles from "./about.module.scss";
import FS from "../../image/_GGL8170.jpg";
import MLV from "../../image/MLV.jpg";
import MV from "../../image/MV.jfif";
import RZ from "../../image/RZ.jfif";
import LM from "../../image/LM.jfif";

const About = () => {
  const dataTeam = [
    {
      name: "Roberta Rizzuto",
      in: "https://www.linkedin.com/in/roberta-rizzuto/",
      photo: RZ,
    },
    {
      name: "Federica Schillaci",
      in: "https://www.linkedin.com/in/federica-schillaci/",
      photo: FS,
    },
    {
      name: "Martina Li Vigni",
      in: "https://www.linkedin.com/in/martina-li-vigni-lv/",
      photo: MLV,
    },
    {
      name: "Marco Viscuso",
      in: "https://www.linkedin.com/in/marco-viscuso/",
      photo: MV,
    },
    {
      name: "Lorena Marullo",
      in: "https://www.linkedin.com/in/lorena-marullo-443072138/",
      photo: LM,
    },
  ];

  return (
    <div className={styles.About}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>About us</h2>
        </div>
        <div className={styles.text}>
          <p>
            Wanderer, an app developed by people who share a passion for
            travelling and coding whom would like to introduce you to a fine
            array of events and experiences all around the world! Our Earth is
            full of wonderful places and cultures to be awed from, what are you
            waiting for? It's time to pack your bags, fasten your seatbelt and
            reach new destinations!
          </p>
          <cite>"The Earth is what all have in common."</cite>
          <p>-Wendell Berry</p>

          <p>
            Click on the pictures below to be redirected to our Linkedin
            profiles!
          </p>
        </div>
        <div className={styles.list_name}>
          {dataTeam.map((e, i) => {
            return (
              <div key={i} className={styles.info}>
                <a href={e.in} target="_blank">
                  <img src={e.photo} />
                </a>
                <p>{e.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
