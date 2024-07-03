import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Headercomponent";
import BodyComponent from "./components/Bodycomponent";

const AppLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
