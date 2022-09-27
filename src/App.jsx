import styles from "./App.module.scss";
import Header from "./Components/Header";
import MainInput from "./Components/MainInput";

import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className={styles.App}>
      <Header><MainInput/></Header>
      <Outlet />
    </div>
  );
}

export default App;
