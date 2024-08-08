import React, { useEffect, useState } from "react";
import { menu_Api } from "./constants";

const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(menu_Api + resId);

    const json = await response.json();

    setMenuData(json);
  };

  return menuData;
};

export default useRestaurantMenu;
