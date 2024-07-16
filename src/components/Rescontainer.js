import ResCard from "./Rescard";
import restaurantList from "../utilis/mockdata";
import { useEffect } from "react";
import React from "react";

const ResContainer = (props) => {
  return (
    <div>
      {/* <h1>Restaurants with online food delivery in bangalore</h1> */}
      <div className="IntResCont">
        {props.resdataFiltered.map((restaurantData) => {
          return (
            <ResCard key={restaurantData.info.id} resdata={restaurantData} />
          );
        })}
      </div>
    </div>
  );
};
export default ResContainer;
