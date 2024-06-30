import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <div>
      <h1>rendered</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
