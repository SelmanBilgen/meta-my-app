import React from "react";
import "./About.css";
import mario from "../assets/Mario-Adrian-1.png";
import rest1 from "../assets/restaurant-1.png";

const About = () => {
  return (
    <>
      <div className="lemon-container">
        <article className="little-lemon">
          <div className="lemon">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Little Lemon is a Mediterranean restaurant owned by Mario and
              Adrian brothers. It is established in 1985 in the USA by their
              family.
            </p>
            <p>
              Mario and Adrian strive to bring you authentic Italian food
              inspired from secret family recipes of great Italian chefs,
              prepared lovingly, with great taste & superior quality!
            </p>
            <p>
              As a family-run Italian restaurant we offer a warm welcoming
              experience, whether you are visiting us for a romantic night out,
              larger party or corporate event we guarantee that you will be well
              looked after by our friendly and attentive staff.
            </p>
          </div>
          <div className="rest-images">
            <img className="mario" src={mario} alt="two chefs" />
            <img className="rest1" src={rest1} alt="restaurant" />
          </div>
        </article>
      </div>
      <div className="yellow-line"></div>
    </>
  );
};

export default About;
