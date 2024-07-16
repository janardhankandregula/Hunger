import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { menu_Api } from "../utilis/constants";

const Menu = () => {
  const [menuData, setMenuData] = useState(null);

  const [isOpenList, setIsOpenList] = useState([]);
  const [iterateArray, setIterateArray] = useState([]);
  const { resId } = useParams();

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
      const test =
        menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const iterateArray2 = test.slice(2, test.length - 2);
      setIterateArray(iterateArray2);
      const initialOpenState = Array(iterateArray.length).fill(true);

      setIsOpenList(initialOpenState);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // console.log(menuData);

  const title =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.title;
  // console.log(title);
  const itemCards =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;
  // console.log(itemCards);
  // console.log(menuData?.data?.cards[4]?.groupedCard?.cardGroupMap);

  if (!itemCards) {
    return <ShimmerUi />;
  }
  const toggleList = (index) => {
    const newIsOpenList = [...isOpenList];
    newIsOpenList[index] = !newIsOpenList[index];
    setIsOpenList(newIsOpenList);
    // setIsOpen(!isOpen);
  };

  // console.log(test);

  // console.log(iterateArray);

  return (
    <div className="menuContainer">
      <h1>{menuData?.data?.cards[0]?.card?.card?.text}</h1>
      {iterateArray.map((ele, index) => {
        return (
          <div key={index}>
            <div className="menuTitle">
              <h1>
                {/* {console.log(ele.card.card.itemCards.length)}
                {ele.card.card.title}({ele.card.card.itemCards.length}) */}

                {ele.card.card.title}
                {ele.card.card.itemCards && ( // Check if itemCards exists
                  <span>({ele.card.card.itemCards.length})</span>
                )}
              </h1>
            </div>
            <button
              onClick={() => {
                toggleList(index);
              }}
            >
              {" "}
              {isOpenList[index] ? "Hide List" : "Show List"}
            </button>
            <div>
              {isOpenList[index] && (
                <ul>
                  {ele.card && ele.card.card && ele.card.card.itemCards && (
                    <ul>
                      {ele.card.card.itemCards.map((data) => {
                        const { name, defaultPrice, id, price } =
                          data?.card?.info;
                        return (
                          <li key={id}>
                            {name}-Rupees:
                            {defaultPrice / 100
                              ? defaultPrice / 100
                              : price / 100}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </ul>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
