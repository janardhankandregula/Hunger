import { HEADER_LOGO } from "../utilis/constants";

const HeaderComponent = () => {
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
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
