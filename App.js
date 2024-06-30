import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="container">
      <div>
        <img
          className="logo"
          src="https://logowik.com/content/uploads/images/free-food-delivery6258.logowik.com.webp"
          alt="logoe"
        />
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

const BodyComponent = () => {
  return <div className="bodyContainer">Body</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
