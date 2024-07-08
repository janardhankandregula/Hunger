import MindCard from "./MindCard";
import { useState } from "react";
const CarouselMainComponent = (props) => {
  const itemWidth2 = 250;
  const mindData =
    props?.resdata?.data?.data?.cards[0]?.card?.card?.gridElements
      ?.infoWithStyle?.info;
  const title = props?.resdata?.data?.data?.cards[0]?.card?.card?.header?.title;

  const [currentIndex, setCurrentIndex] = useState(0);

  const moveToPrevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 0.1, 0));
  };

  const moveToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < mindData.length - 0.1 ? prevIndex + 0.1 : prevIndex
    );
  };
  if (!mindData) {
    return null;
  }

  return (
    <div className="mainCarousel">
      <div>
        <h2 className="mainTitleTest">{title}</h2>
      </div>
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${currentIndex * itemWidth2}%)` }}
      >
        {mindData.map((res) => {
          return <MindCard key={res.id} md={res} />;
        })}
      </div>

      <button className="carousel-prev2" onClick={moveToPrevSlide}>
        Prev
      </button>
      <button
        className="carousel-next2"
        onClick={moveToNextSlide}
        disabled={currentIndex === mindData.length - 1}
      >
        Next
      </button>
    </div>
  );
};
export default CarouselMainComponent;
