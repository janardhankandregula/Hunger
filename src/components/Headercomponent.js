import { useState } from "react";
import { HEADER_LOGO } from "../utilis/constants";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [login, setLogIn] = useState(false);
  const clicked = () => {
    setLogIn(!login);
  };

  return (
    <div className="container">
      <div>
        <img className="logo" src={HEADER_LOGO} alt="logoe" />
      </div>
      <div className="nav-Bar">
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/About">About</Link>
          </li>

          <li>
            <Link to="/Contact">Contact</Link>
          </li>

          <li>Cart</li>
          <div>
            <button
              className={`loginBtn ${login ? "login" : "logout"}`}
              onClick={clicked}
            >
              {login ? "log-out" : "log-in"}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
