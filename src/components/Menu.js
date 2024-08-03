// const Menu = () => {
//   const [isOpenList, setIsOpenList] = useState([]);
//   const { resId } = useParams();

//   const menuData = useRestaurantMenu(resId);

//   const title =
//     menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//       ?.card?.title;

//   const itemCards =
//     menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//       ?.card?.itemCards;

//   if (!itemCards) {
//     return <ShimmerUi />;
//   }
//   const toggleList = (index) => {
//     const newIsOpenList = [...isOpenList];
//     newIsOpenList[index] = !newIsOpenList[index];
//     setIsOpenList(newIsOpenList);
//     // setIsOpen(!isOpen);
//   };
//   const test =
//     menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//   // console.log(test);
//   const iterateArray = test.slice(2, test.length - 2);
//   // console.log(iterateArray);

//   return (
//     <div className="menuContainer">
//       <h1>{menuData?.data?.cards[0]?.card?.card?.text}</h1>
//       {iterateArray.map((ele, index) => {
//         return (
//           <div key={index}>
//             <div className="menuTitle">
//               <h1>
//                 {/* {console.log(ele.card.card.itemCards.length)}
//                 {ele.card.card.title}({ele.card.card.itemCards.length}) */}

//                 {ele.card.card.title}
//                 {ele.card.card.itemCards && ( // Check if itemCards exists
//                   <span>({ele.card.card.itemCards.length})</span>
//                 )}
//               </h1>
//             </div>
//             <button
//               onClick={() => {
//                 toggleList(index);
//               }}
//             >
//               {" "}
//               {isOpenList ? "Hide List" : "Show List"}
//             </button>
//             <div>
//               {isOpenList[index] && (
//                 <ul>
//                   {ele.card && ele.card.card && ele.card.card.itemCards && (
//                     <ul>
//                       {ele.card.card.itemCards.map((data) => {
//                         const { name, defaultPrice, id, price } =
//                           data?.card?.info;
//                         return (
//                           <li key={id}>
//                             {name}-Rupees:
//                             {defaultPrice / 100
//                               ? defaultPrice / 100
//                               : price / 100}
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   )}
//                 </ul>
//               )}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Menu;

import React from 'react';
import Accordion from './Accordion';
import { useState } from 'react';
import ShimmerUi from './ShimmerUi';
import { useParams } from 'react-router-dom';

import useRestaurantMenu from '../utilis/useRestaurantMenu';

const Menu = () => {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);

  const itemCategory =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (filterCategory) =>
        filterCategory.card.card['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    ) || [];

  return (
    <div className='p-4'>
      <Accordion items={itemCategory} />{' '}
    </div>
  );
};

export default Menu;
