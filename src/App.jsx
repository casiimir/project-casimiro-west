import styles from "./App.module.scss";
import Header from "./components/Header";
import MainInput from "./components/MainInput";
import ButtonScrollTop from "./components/ButtonScrollTop";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Header>
        <MainInput />
      </Header>
      <Outlet />
      <ButtonScrollTop />
    </div>
  );
}

export default App;
