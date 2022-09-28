import { useEffect, useState } from "react";
import ActivitiesHomeCard from "../ActivityHomeCard/ActivityHomeCard";
import styles from "./index.module.scss";

const ActivitiesHomeList = () => {
  return (
    <div className={styles.ActivitiesHomeList}>
      <ActivitiesHomeCard />
    </div>
  );
};

export default ActivitiesHomeList;
