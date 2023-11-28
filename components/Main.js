import React from "react";
import "./Main.css";
import MainSpecials from "./MainSpecials";
import MainTestimonials from "./MainTestimonials";

const Main = () => {
  return (
    <div className="main">
      <MainSpecials />
      <MainTestimonials />
    </div>
  );
};

export default Main;
