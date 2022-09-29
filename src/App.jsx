import styles from "./App.module.scss";
import Header from "./components/Header";
import MainInput from "./components/MainInput";
import ButtonScrollTop from "./components/ButtonScrollTop";
import ActivitiesHomeList from "./components/ActivitiesHomeList";

import { Outlet } from "react-router-dom";
import Card from "./components/Card/Card";

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
