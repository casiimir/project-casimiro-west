import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Outlet />
    </div>
  );
};


export default Home