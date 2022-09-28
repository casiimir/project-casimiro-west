import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import Card from "../Card/Card";

const TopCityCardList = () => {
  const [topCityCardListData, setTopCityCardListData] = useState();

  //   const BASE_URL = "https://api.musement.com/api/v3/";

  const GET = async () => {
    const res = await fetch("https://api.musement.com/api/v3/cities");
    return res.json();
  };

  useEffect(() => {
    GET().then((data) =>
      setTopCityCardListData(data.filter((el) => el.show_in_popular === true))
    );
  }, [topCityCardListData]);

  console.log(topCityCardListData);

  return (
    topCityCardListData &&
    topCityCardListData.map((cities) => (
      <div key={cities.el.id}>
        <Card CardData={topCityCardListData} />
      </div>
    ))
  );
};

export default TopCityCardList;
