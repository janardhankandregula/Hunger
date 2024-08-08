import React, { Suspense, useEffect, useState } from 'react';
import { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Headercomponent';
import BodyComponent from './components/Bodycomponent';
import TailwindHeader from './components/TailwindHeader';
import { CartPageProvider } from './utilis/CartPageContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error from './components/Error';
import { Outlet } from 'react-router-dom';
import Menu from './components/Menu';
import { LoginProvider } from './utilis/loginContext';

import CartPage from './components/CartPage';
import { Provider } from 'react-redux';
import appStore from './utilis/appStore';

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

const AppLayout = () => {
  const [loggedUserInfo, setUserInfo] = useState();
  useEffect(() => {
    setUserInfo('Test name');
  }, []);
  return (
    <div>
      <Provider store={appStore}>
        <LoginProvider>
          <CartPageProvider>
            <TailwindHeader />

            <Outlet />
          </CartPageProvider>
        </LoginProvider>
      </Provider>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <BodyComponent />,
      },
      {
        path: '/About',
        element: (
          <Suspense fallback={<h1>loading........</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/CartPage',
        element: (
          <Suspense fallback={<h1>loading........</h1>}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: '/Contact',
        element: (
          <Suspense fallback={<h1>loading........</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '/Grocery',

        element: (
          <Suspense fallback={<h1>loading........</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/Errort',
        element: <Error />,
      },
      {
        path: '/restaurant/:resId',
        element: <Menu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
