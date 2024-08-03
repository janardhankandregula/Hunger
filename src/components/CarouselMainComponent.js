import MindCard from './MindCard';
import { useState } from 'react';
const CarouselMainComponent = (props) => {
  const itemWidth = 250;

  const mindData = props?.resdata[0]?.card?.card?.imageGridCards?.info;

  const title = props?.resdata[0]?.card?.card?.header?.title;

  const [currentIndex, setCurrentIndex] = useState(0);

  const moveToPrevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 0.02, 0));
  };

  const moveToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= mindData.length * 0.015 ? prevIndex + 0.02 : prevIndex
    );

    console.log(currentIndex);
    console.log(mindData);
  };
  if (!mindData) {
    return null;
  }

  return (
    <div className='mainCarousel relative mx-auto max-w-screen-xl'>
      <div>
        <h2 className='font-bold text-2xl font-sans'>{title}</h2>
      </div>
      <div className=' flex overflow-hidden'>
        <div
          className='flex transition-transform duration-300 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * itemWidth}%)` }}
        >
          {mindData.map((res) => {
            return <MindCard key={res.id} md={res} />;
          })}
        </div>
      </div>

      <button
        className='absolute top-4 right-[80] transform -translate-y-1/2 bg-gray-200 px-3 py-2 rounded-lg shadow-md hover:bg-gray-300 transition duration-300 ease-in-out'
        onClick={moveToPrevSlide}
        disabled={currentIndex === 0}
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
      </button>
      <button
        className='absolute top-4 right-[10] transform -translate-y-1/2 bg-gray-200 px-3 py-2 rounded-lg shadow-md hover:bg-gray-300 transition duration-300 ease-in-out '
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
      </button>
    </div>
  );
};
export default CarouselMainComponent;
