import { useState } from "react";
import { HEADER_LOGO } from "../utilis/constants";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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
