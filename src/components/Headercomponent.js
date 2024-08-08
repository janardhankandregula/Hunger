import { useState } from 'react';
import { HEADER_LOGO } from '../utilis/constants';
import { Link } from 'react-router-dom';
import useCheckInternet from '../utilis/useCheckInternet';

const HeaderComponent = () => {
  const [login, setLogIn] = useState(false);
  const clicked = () => {
    setLogIn(!login);
  };
  const internetStatus = useCheckInternet();
  console.log(internetStatus);

  return (
    <div className='flex justify-between items-center bg-pink-100 shadow-lg'>
      <div>
        <img className='w-56' src={HEADER_LOGO} alt='logoe' />
      </div>
      <div className='nav-Bar'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'>onlineStatus:{internetStatus ? '✅' : '❌'}</li>
          <li className='px-4'>
            <Link to='/'>Home</Link>
          </li>

          <li className='px-4'>
            <Link to='/About'>About</Link>
          </li>

          <li className='px-4'>
            <Link to='/Contact'>Contact</Link>
          </li>
          <li className='px-4'>
            <Link to='/Grocery'>Grocery</Link>
          </li>

          <li className='px-4'>🛒</li>

          <li className='px-4'>
            <button
              className={`loginBtn ${login ? 'login' : 'logout'}`}
              onClick={clicked}
            >
              {login ? 'log-out' : 'log-in'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
