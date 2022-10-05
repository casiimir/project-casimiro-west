import styles from "./index.module.scss";
import tumbleweed from "../../images/tumbleweed.png";
const ErrorPage = () => {
  return (
    <div className={styles.ErrorPage}>
      <section className={styles.textSection}>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.text}>
          You arrived nowhere. Choose another destination...
        </p>
      </section>

      <section className={styles.tumbleweedSection}>
        <img
          className={styles.tumbleweed}
          src={tumbleweed}
          alt="a rolling tumbleweed"
        />
      </section>
    </div>
  );
};

export default ErrorPage;
