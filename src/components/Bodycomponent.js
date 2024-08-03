import ResContainer from './Rescontainer';

import { useState } from 'react';

import ShimmerUi from './ShimmerUi';

import CarouselComponent from './CarouselComponent';
import CarouselMainComponent from './CarouselMainComponent';
import useRestaurantData from '../utilis/useRestaurantData';
import useCheckInternet from '../utilis/useCheckInternet';

const BodyComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const reslist = useRestaurantData();

  const originalResList = useRestaurantData();
  const rawData = useRestaurantData();

  const internetStatus = useCheckInternet();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    searched();
  };

  const searched = () => {
    const filteredList = originalResList.filter((res) => {
      return res.info.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    filteredList.length > 0
      ? setResList(filteredList)
      : setResList(originalResList);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searched();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Backspace') {
      setSearchTerm(event.target.value);
      searched();
    }
  };

  const highRatedRestaurants = () => {
    const filteredList = restaurantList.filter((res) => {
      return res.info.avgRating >= 4.6;
    });
    setResList(filteredList);
  };
  const onlyVeg = () => {
    const filteredList = restaurantList.filter((res) => {
      return res.info.veg == true;
    });
    setResList(filteredList);
  };

  return (
    <div className='bg-gradient-to-r from-purple-100 to-red-100 min-h-screen'>
      {internetStatus === false && (
        <h1>Looks like Offline !!! Please check your internet connection</h1>
      )}
      {internetStatus !== false && (
        <>
          {reslist.length == 0 ? (
            <ShimmerUi />
          ) : (
            <div className='flex items-center ml-80'>
              <div className='p-4 m-4 flex'>
                <input
                  type='text'
                  placeholder='Search...'
                  value={searchTerm}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  onKeyDown={handleKeyDown}
                  className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[400px] rounded-md sm:text-sm focus:ring-1'
                />
                <button
                  className=' pl-4  pr-4 ml-6  bg-white text-black font-bold rounded-2xl border border-black hover:text-white hover:bg-gray-500'
                  onClick={searched}
                >
                  Search
                </button>
              </div>
              <div className='ml-2 mr-4'>
                <button
                  className='p-[10px] bg-white text-black font-bold rounded-2xl border border-black hover:text-white hover:bg-gray-500'
                  onClick={highRatedRestaurants}
                >
                  Top Rated Restaurants
                </button>
              </div>
              <div className='pl-4 pr-4 py-2.5 bg-white text-black font-bold rounded-2xl border border-black hover:text-white hover:bg-gray-500'>
                <label>
                  <input type='checkbox' onChange={onlyVeg} />
                  only Veg
                </label>
              </div>
            </div>
          )}
          <CarouselMainComponent resdata={rawData} />
          <CarouselComponent resdata={rawData} />
          <ResContainer resdataFiltered={reslist} />
        </>
      )}
    </div>
  );
};
export default BodyComponent;
