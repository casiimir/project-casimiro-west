import styles from "./App.module.scss";
import Header from "./components/Header";
import ButtonScrollTop from "./components/ButtonScrollTop";

import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <div className={styles.App}>
      <Header cartNumber={cartNumber} />
      <Outlet context={[setCartNumber]} />
      <ButtonScrollTop />
    </div>
  );
}

export default App;
