import restaurantList from "../utilis/mockdata";
import { useState } from "react";
import ResCard from "./Rescard";



const CarouselComponent = (props) => {
    const title=props?.resdata?.data?.data?.cards[1]?.card?.card?.header?.title
    
    // console.log(props?.resdata?.data?.data?.cards[1]?.card?.card?.header?.title)
      const restaurantChain =
      props?.resdata?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?
        .restaurants;
        

      const [currentIndex, setCurrentIndex] = useState(0);
      const itemWidth = 300;

      const moveToNextSlide = () => {
          const nextIndex = (currentIndex + 1) % restaurantChain.length;
          setCurrentIndex(nextIndex);
        };
        const moveToPrevSlide = () => {
          const nextIndex = (currentIndex - 1+ restaurantChain.length) % restaurantChain.length;
          setCurrentIndex(nextIndex);
        };

    if (!restaurantChain) {
      return null;
    }

  return (
    <div className="Carousel">
        <div>
            <h1 className="chainTitle">{title}</h1>
            
            {/* <h1 className="chainTitle">Top Restaurant chains in Bangalore</h1> */}
            </div>
      <div
        className="CarouselCards"
        style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
      >
        {restaurantChain.map((res) => {
          return <ResCard key={res.info.id} resdata={res} />;
        })}
      </div>
      <button className="carousel-prev" onClick={moveToPrevSlide}>
        Prev
      </button>
      <button className="carousel-next" onClick={moveToNextSlide}>
        Next
      </button>
    </div>
  );
};
export default CarouselComponent;
