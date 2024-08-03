import React from 'react';
import { HEADER_LOGO } from '../utilis/constants';
import useCheckInternet from '../utilis/useCheckInternet';
import { avatar_png } from '../utilis/constants';
import { Link } from 'react-router-dom';
import { useLogin } from '../utilis/loginContext';
import { useCartPage } from '../utilis/CartPageContext';

const TailwindHeader = () => {
  const { isLoggedIn, login, logout, loggedInUser } = useLogin();
  const { cartLength } = useCartPage();

  const clicked = () => {
    isLoggedIn ? logout() : login('janardhan');
    console.log(isLoggedIn);
  };

  const internetStatus = useCheckInternet();

  return (
    <div>
      <nav className='bg-gradient-to-r from-indigo-200 to-red-500'>
        <div className='flex w-full px-2 sm:px-6 lg:px-8 '>
          <div className='relative flex items-center justify-between w-full'>
            <div className='flex flex-1 items-center justify-between sm:items-stretch sm:justify-start'>
              <div className='flex flex-shrink-0 items-center mb-6'>
                <img
                  className='w-[200px] mt-[25px] rounded-2xl'
                  src={HEADER_LOGO}
                  alt='Your Company'
                />
              </div>
              <div className='hidden sm:ml-6 sm:block'>
                <div className='flex space-x-8 mt-[80px] ml-40 pl-40'>
                  <Link
                    to='/'
                    className='rounded-md bg-gray-900 px-3 py-2 text-xl font-medium text-white'
                    aria-current='page'
                  >
                    Home
                  </Link>
                  <Link
                    to='/About'
                    className='rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                  >
                    About
                  </Link>
                  <Link
                    to='/Contact'
                    className='rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                  >
                    Contact
                  </Link>
                  <Link
                    to='/CartPage'
                    className='rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                  >
                    Cart({cartLength})
                  </Link>
                  <Link className='rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
                    onlineStatus: {internetStatus ? '✅' : '❌'}
                  </Link>
                  <button
                    className='rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                    onClick={clicked}
                  >
                    {isLoggedIn ? 'log-out' : 'log-in'}
                  </button>
                  <span className='rounded-md px-3 py-2 text-xl font-medium text-black-300 hover:bg-gray-700 hover:text-white'>
                    {loggedInUser}
                  </span>
                </div>
              </div>
            </div>
            <div className='absolute inset-y-0 flex items-center pr-2 mr-10 right-[10px] sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <button
                type='button'
                className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
              >
                <span className='absolute -inset-1.5'></span>
                <span className='sr-only'>View notifications</span>
                <svg
                  className='h-10 w-10'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                  />
                </svg>
              </button>
              <div className='relative ml-5'>
                <button
                  type='button'
                  className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                  id='user-menu-button'
                  aria-expanded='false'
                  aria-haspopup='true'
                >
                  <span className='absolute -inset-1.5'></span>
                  <span className='sr-only'>Open user menu</span>
                  <img
                    className='h-12 w-12 rounded-full'
                    src={avatar_png}
                    alt='error'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:hidden' id='mobile-menu'>
          <div className='space-y-1 px-2 pb-3 pt-2'>
            <a
              href='#'
              className='block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white'
              aria-current='page'
            >
              Dashboard
            </a>
            <a
              href='#'
              className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
            >
              Team
            </a>
            <a
              href='#'
              className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
            >
              Projects
            </a>
            <a
              href='#'
              className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TailwindHeader;
