import styles from "./App.module.scss";
import Header from "./components/Header";
import ButtonScrollTop from "./components/ButtonScrollTop";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Outlet />
      <ButtonScrollTop />
    </div>
  );
}

export default App;
