// import { IMG_URL } from "../utilis/constants";
import { Link } from "react-router-dom";
import IMG_URL from "../utilis/constants";

const ResCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId, id } =
    props.resdata.info;

  const { slaString } = sla;

  const cusinesand =
    cuisines.length >= 2
      ? `${cuisines.slice(0, -1).join(", ")} and ${cuisines.slice(-1)}`
      : cuisines.join(", ");

  return (
    <div className="resCard">
      <Link to={`/restaurant/${id}`}>
        <div className="cardContainer">
          <img className="resImage" src={IMG_URL + cloudinaryImageId} />
          <h3>{name}</h3>

          <h4>{cusinesand}</h4>
          <h4>{avgRating} stars</h4>

          <h4>{slaString} </h4>
          <h4>{costForTwo} </h4>
        </div>
      </Link>
    </div>
  );
};
export default ResCard;
