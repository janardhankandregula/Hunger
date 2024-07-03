import ResContainer from "./Rescontainer";
import restaurantList from "../utilis/mockdata";
import ResCard from "./Rescard";
import restaurantList from "../utilis/mockdata";
import { useState } from "react";

const BodyComponent = () => {
  const [reslist, setResList] = useState(restaurantList);
  console.log(reslist[0]);

  const highRatedRestaurants = () => {
    const filteredList = restaurantList.filter((res) => {
      return res.info.avgRating >= 4.6;
    });
    setResList(filteredList);
  };
  const onlyVeg = () => {
    const filteredList = restaurantList.filter((res) => {
      return res.info.veg == true;
    });
    setResList(filteredList);
  };
  return (
    <div className="bodyContainer">
      <div className="topRated">
        <button onClick={highRatedRestaurants}>Top Rated Restaurants</button>
      </div>
      <div className="vegCheckBox">
        <label>
          <input type="checkbox" onChange={onlyVeg} />
          only Veg
        </label>
      </div>
      <ResContainer resdataFiltered={reslist} />
    </div>
  );
};
export default BodyComponent;
