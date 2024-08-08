import ResContainer from "./Rescontainer";
import axios from "axios";
import { useEffect, useState } from "react";

import ShimmerUi from "./ShimmerUi";

import CarouselComponent from "./CarouselComponent";
import CarouselMainComponent from "./CarouselMainComponent";
import useRestaurantData from "../utilis/useRestaurantData";
import useCheckInternet from "../utilis/useCheckInternet";

const BodyComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [originalResList, setOriginalResList] = useState([]);
  // const originalResList = useRestaurantData();
  const [reslist, setResList] = useState([]);
  // const reslist = useRestaurantData();

  useEffect(() => {
    fetchRestaurantData();
  }, []);
  const fetchRestaurantData = async () => {
    // try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }
    const data = await response.json();
    console.log(data);

    setOriginalResList(data?.data?.cards || {});
    // }
    // catch (error) {
    //   console.error("Error fetching data:", error);
    // }
  };
  console.log(originalResList);
  const originalResListUpdated =
    originalResList[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const reslist2 = originalResListUpdated;

  const title = originalResList[2]?.card?.card?.title;

  useEffect(() => {
    setResList(originalResListUpdated);
  }, [originalResList]);

  // const rawData = useRestaurantData();

  // const internetStatus = useCheckInternet();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searched = () => {
    const filteredList = reslist2.filter((res) => {
      return res.info.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    filteredList.length > 0 ? setResList(filteredList) : setResList(reslist);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searched();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      setSearchTerm(event.target.value);
      searched();
    }
  };

  const highRatedRestaurants = () => {
    const filteredList = reslist2.filter((res) => res.info.avgRating >= 4.5);
    setResList(filteredList);
  };

  return (
    <div className="bg-gradient-to-r from-purple-100 to-red-100 min-h-screen">
      <div className="flex items-center ml-80">
        <div className="p-4 m-4 flex">
          <input
            data-testid="searchIp"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[400px] rounded-md sm:text-sm focus:ring-1"
          />
          <button
            className="pl-4 pr-4 ml-6 bg-white text-black font-bold rounded-2xl border border-black hover:text-white hover:bg-gray-500"
            onClick={searched}
          >
            Search
          </button>
        </div>
        <div className="ml-2 mr-4">
          <button
            className="p-[10px] bg-white text-black font-bold rounded-2xl border border-black hover:text-white hover:bg-gray-500"
            onClick={highRatedRestaurants}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* <CarouselMainComponent resdata={rawData} />
      <CarouselComponent resdata={rawData} /> */}
      <ResContainer resdataFiltered={reslist} title={title} />
    </div>
  );
};

export default BodyComponent;
