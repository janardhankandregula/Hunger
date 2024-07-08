import ResCard from "./Rescard";
import restaurantList from "../utilis/mockdata";
import { useEffect } from "react";
import React from "react";

const ResContainer = (props) => {
  return (
    <div className="IntResCont">
      {props.resdataFiltered.map((restaurantData) => {
        return (
          <ResCard key={restaurantData.info.id} resdata={restaurantData} />
        );
      })}
    </div>
  );
};
export default ResContainer;
