// import { IMG_URL } from "../utilis/constants";
import { Link } from "react-router-dom";
import IMG_URL from "../utilis/constants";

import { useLogin } from "../utilis/loginContext";

const ResCard = (props) => {
  //console.log(props.resdata.info);
  const { loggedInUser } = useLogin();
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId, id } =
    props?.resdata?.info || {};

  if (!props?.resdata?.info) return null;

  const { slaString } = sla || {};

  // const cusinesand =
  //   cuisines.length >= 2
  //     ? `${cuisines.slice(0, -1).join(", ")} and ${cuisines.slice(-1)}`
  //     : cuisines.join(", ");

  const cusinesand =
    cuisines && cuisines.length >= 2
      ? `${cuisines.slice(0, -1).join(", ")} and ${cuisines.slice(-1)}`
      : cuisines
      ? cuisines.join(", ")
      : {};

  return (
    <div
      data-testid="resCardId"
      className="relative left-[100] m-4 p-4 w-[300] overflow-hidden shadow-lg border border-gray-300 max-w-sm rounded-2xl hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
    >
      <Link to={`/restaurant/${id}`}>
        <div className="px-6 py-4">
          <img
            className="w-full  h-48 object-cover rounded-lg"
            src={IMG_URL + cloudinaryImageId}
          />
          <h3 className="font-bold text-xl mb-2 mt-2">{name}</h3>

          <h4 className="text-gray-800 font-semibold mb-2 mt-2">
            {cusinesand}
          </h4>
          <h4 className="text-gray-800 font-semibold mb-2 mt-2">
            {avgRating} stars
          </h4>

          <h4 className="text-gray-800 font-semibold mb-2 mt-2">
            {slaString}{" "}
          </h4>
          <h4 className="text-gray-800 font-semibold mb-2 mt-2">
            {costForTwo}{" "}
          </h4>
          <h4 className="text-gray-800 font-semibold mb-2 mt-2 text-xl">
            user :{loggedInUser}
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default ResCard;

export const TestComponent = (props) => {
  console.log(props);
  const restaurantName = props.resdata?.info?.name || "Default Name";

  return <div>{restaurantName}</div>;
};

export const RescardWithFastDelivery = (ResCard) => {
  return (props) => {
    // console.log(props.resdata.info.name);
    return (
      <div>
        <label className="bg-black text-white m-2 p-2 rounded-2xl ml-[120px] relative top-[50px]">
          Fastest Delivery
        </label>

        <ResCard {...props} />
      </div>
    );
  };
};
