import ResCard from "./Rescard";
import { RescardWithFastDelivery } from "./Rescard";

import React, { useState } from "react";

const ResContainer = (props) => {
  console.log(props);

  const HOCWithRescard = RescardWithFastDelivery(ResCard);
  return (
    <div className="relative mx-auto max-w-screen-2xl">
      <div className="pl-20">
        <h1 className="font-bold text-4xl font-sans my-10 mb-5 py-4 pl-10">
          {props?.title}
          {/* {props?.resdataFiltered[2]?.card?.card?.title} */}
        </h1>
      </div>
      <div className="flex flex-wrap relative">
        {/* {console.log(
          props?.resdataFiltered[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        )} */}
        {props?.resdataFiltered?.map((restaurantData) => {
          return restaurantData.info.sla.deliveryTime <= 30 ? (
            <HOCWithRescard resdata={restaurantData} />
          ) : (
            <ResCard key={restaurantData.info.id} resdata={restaurantData} />
          );
        })}
      </div>
    </div>
  );
};
export default ResContainer;
