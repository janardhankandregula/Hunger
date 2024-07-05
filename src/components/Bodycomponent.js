import ResContainer from "./Rescontainer";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ShimmerUi from "./ShimmerUi";

const BodyComponent = () => {
  const inititialState = [];
  const [reslist, setResList] = useState(inititialState);
  const [originalResList, setOriginalResList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await axios.get(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        console.log(
          response.data.data.cards[4].card.card.gridElements.infoWithStyle
            .restaurants
        );

        setResList(
          response.data.data.cards[4].card.card.gridElements.infoWithStyle
            .restaurants
        );
        setOriginalResList(
          response.data.data.cards[4].card.card.gridElements.infoWithStyle
            .restaurants
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRestaurantData();
  }, []);

  // useEffect(() => {
  //   resetList();
  // }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    searched();
  };

  const searched = () => {
    const filteredList = originalResList.filter((res) => {
      return res.info.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    filteredList.length > 0
      ? setResList(filteredList)
      : setResList(originalResList);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searched();
    }
  };

  // const resetList = () => {
  //   setResList(originalResList);
  // };

  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      setSearchTerm(event.target.value);
      searched();
    }
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
      {reslist.length == 0 ? (
        <ShimmerUi />
      ) : (
        <div>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              onKeyDown={handleKeyDown}
              className="searchInput"
            />
            <button className="searchButton" onClick={searched}>
              Search
            </button>
          </div>
          <div className="topRated">
            <button onClick={highRatedRestaurants}>
              Top Rated Restaurants
            </button>
          </div>
          <div className="vegCheckBox">
            <label>
              <input type="checkbox" onChange={onlyVeg} />
              only Veg
            </label>
          </div>
        </div>
      )}

      <ResContainer resdataFiltered={reslist} />
    </div>
  );
};
export default BodyComponent;
