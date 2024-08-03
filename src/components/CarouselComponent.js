import restaurantList from '../utilis/mockdata';
import { useState } from 'react';
import ResCard from './Rescard';

const CarouselComponent = (props) => {
  // console.log(props);
  const title = props?.resdata[1]?.card?.card?.header?.title;

  const restaurantChain =
    props?.resdata[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const [currentIndex, setCurrentIndex] = useState(0.3);
  const itemWidth = 300;

  const moveToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < restaurantChain.length - 0.01 ? prevIndex + 1.1 : prevIndex
    );
  };
  const moveToPrevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1.1, 0));
  };

  if (!restaurantChain) {
    return null;
  }

  return (
    <div className='carousel relative mx-auto max-w-screen-xl'>
      <div>
        <h1 className='font-bold text-4xl font-sans py-4 my-4 mt-10'>
          {title}
        </h1>
      </div>
      <div className='flex overflow-hidden'>
        <div
          className='flex transition-transform duration-300 ease-in-out'
          style={{
            transform: `translateX(-${currentIndex * itemWidth}px)`,
          }}
        >
          {restaurantChain.map((res) => {
            return <ResCard key={res.info.id} resdata={res} />;
          })}
        </div>
      </div>
      <button
        className='absolute top-4 right-[80] transform -translate-y-1/2 bg-gray-200 px-3 py-2 rounded-lg shadow-md hover:bg-gray-300 transition duration-300 ease-in-out'
        onClick={moveToPrevSlide}
      >
        <div className='rounded-full bg-white p-1'>
          <svg
            className='w-6 h-6 text-gray-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </div>
        {/* Prev */}
      </button>
      <button
        className='absolute top-4 right-[10]  transform -translate-y-1/2 bg-gray-200 px-3 py-2 rounded-lg shadow-md hover:bg-gray-300 transition duration-300 ease-in-out'
        onClick={moveToNextSlide}
      >
        <div className='rounded-full bg-white p-1'>
          <svg
            className='w-6 h-6 text-gray-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </div>
        {/* Next */}
      </button>
    </div>
  );
};
export default CarouselComponent;
