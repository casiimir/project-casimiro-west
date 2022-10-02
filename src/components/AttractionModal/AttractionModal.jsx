import styles from "./index.module.scss";

const AttractionModal = () => {
  return (
    <div className={styles.AttractionModal}>
      <div className={styles.top}>
        <h1 className={styles.title}>Palazzo Ducale di Venezia</h1>
        <img className={styles.img}
          src="https:\/\/images.musement.com\/cover\/0002\/49\/venice-jpg_header-148016.jpeg"
          alt="image"
        />
      </div>
      <div className={styles.bottom}>
        <p  className={styles.text}>
          La storia di Palazzo Ducale a Venezia, un capolavoro dell\u2019arte
          gotica, \u00e8 senza dubbio affascinante. Palazzo Ducale fu la
          residenza del Doge, la suprema autorit\u00e0 della Repubblica di
          Venezia dal 697 al 1797. L'edificazione del palazzo, risalente al
          1172, ha mutato totalmente l'aspetto originario di Piazza San Marco,
          nella quale sorge e di cui \u00e8 diventata una delle attrazioni
          pi\u00f9 famose.Divenuto ufficialmente museo nel 1923, Palazzo Ducale
          \u00e8 sopravvissuto, nella sua lunga storia, a incendi e alluvioni,
          passando di mano in mano tra i diversi Dogi. La facciata, che domina
          la laguna, \u00e8 decorata con sculture risalenti al XIV secolo. Sei
          stanze del palazzo fanno parte del Museo dell'Opera. In esse,
          attualmente,{" "}
        </p>
      </div>
    </div>
  );
};

export default AttractionModal;
