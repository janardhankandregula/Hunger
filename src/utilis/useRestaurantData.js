import { useEffect, useState } from "react";
import axios from "axios";

const useRestaurantData = () => {
  const [resList, setResList] = useState([]);
  const [originalResList, setOriginalResList] = useState([]);
  useEffect(() => {
    fetchRestaurantData();
  }, []);
  const fetchRestaurantData = async () => {
    try {
      const response = await axios.get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      setResList(response?.data?.data?.cards);

      setOriginalResList(response?.data?.data?.cards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return resList;
};
export default useRestaurantData;
