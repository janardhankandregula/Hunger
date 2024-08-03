import React, { useEffect, useState } from "react";
import { menu_Api } from "./constants";

const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(menu_Api + resId);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();

      setMenuData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return menuData;
};

export default useRestaurantMenu;
