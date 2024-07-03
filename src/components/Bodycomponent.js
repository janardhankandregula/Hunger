import ResContainer from "./Rescontainer";
import restaurantList from "../utilis/mockdata";
import ResCard from "./Rescard";
import restaurantList from "../utilis/mockdata";
import { useState } from "react";

const BodyComponent = () => {
  const [reslist, setResList] = useState(restaurantList);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(reslist[0]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searched = () => {
    const filteredList = restaurantList.filter((res) => {
      return res.info.name == searchTerm;
    });

    filteredList.length > 0
      ? setResList(filteredList)
      : setResList(restaurantList);
  };

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
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          className="searchInput"
        />
        <button className="searchButton" onClick={searched}>
          Search
        </button>
      </div>
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
