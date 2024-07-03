import ResCard from "./Rescard";
import restaurantList from "../utilis/mockdata";

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
