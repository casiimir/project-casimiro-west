import styles from "./App.module.scss";
import Card from "./components/Card";

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Project West</h1>
      <div className={styles.color1}></div>
      <div className={styles.color2}></div>
      <div className={styles.color3}></div>
      <div className={styles.color4}></div>
      <div className={styles.color5}></div>
      <div className={styles.color6}></div>
      <div className={styles.color7}></div>
      <Card />
    </div>
  );
}

export default App;
