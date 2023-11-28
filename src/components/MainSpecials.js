import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import greekSalad from "../assets/greek salad-1.png";
import bruchetta from "../assets/bruchetta-1.png";
import lemonDessert from "../assets/lemon dessert-1.png";
import moped from "../assets/Order-for-delivery.svg";

const MainSpecials = () => {
  return (
    <div className="specials-container">
      <section className="specials">
        <div className="main-header">
          <h1 className="specials-title">Specials</h1>
          <Link to="/menu">
            <button className="online-menu-btn">Online Menu</button>
          </Link>
        </div>
        <div className="food-cards">
          <div className="food-card1">
            <img src={greekSalad} alt="greek salad" />
            <div className="card-article">
              <div className="card-heading">
                <h1 className="card-h1">Greek Salad</h1>
                <h2 className="card-h2">$12.99</h2>
              </div>
              <p className="card-p1">
                Refreshing salad, made with tomato, lettuce, feta cheese, and
                olives.Dressed with salt, hot pepper, and olive oil.
              </p>
              <div className="delivery">
                <p className="card-p2">Order for delivery </p>
                <img className="moped" src={moped} alt="moped icon" />
              </div>
            </div>
          </div>
          <div className="food-card1">
            <img src={bruchetta} alt="bruchetta" />
            <div className="card-article">
              <div className="card-heading">
                <h1 className="card-h1">Bruchetta</h1>
                <h2 className="card-h2">$16.99</h2>
              </div>
              <p className="card-p1">
                Refreshing salad, made with tomato, lettuce, feta cheese, and
                olives.Dressed with salt, hot pepper, and olive oil.
              </p>
              <div className="delivery">
                <p className="card-p2">Order for delivery </p>
                <img className="moped" src={moped} alt="moped icon" />
              </div>
            </div>
          </div>
          <div className="food-card1">
            <img src={lemonDessert} alt="lemon dessert" />
            <div className="card-article">
              <div className="card-heading">
                <h1 className="card-h1">Lemon Dessert</h1>
                <h2 className="card-h2">$8.50</h2>
              </div>
              <p className="card-p1">
                Refreshing salad, made with tomato, lettuce, feta cheese, and
                olives.Dressed with salt, hot pepper, and olive oil.
              </p>
              <div className="delivery">
                <p className="card-p2">Order for delivery </p>
                <img className="moped" src={moped} alt="moped icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSpecials;
