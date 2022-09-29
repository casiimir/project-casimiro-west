// import styles from "./index.module.scss";
// import { useState, useEffect } from "react";
// import CityCard from "../CityCard";
// import { GET } from "../../utils/api.js";

// const TopCityCardList = () => {
//   const [topCityCardListData, setTopCityCardListData] = useState();

//   useEffect(() => {
//     GET("cities").then((data) =>
//       setTopCityCardListData(data.filter((el) => el.show_in_popular === true))
//     );
//   }, []);

//   console.log(topCityCardListData);

//   return (
//     <div>
//       {topCityCardListData?.data?.map((el) => (
//         <CityCard CardData={el} />
//       ))}
//     </div>
//   );
// };

// export default TopCityCardList;
