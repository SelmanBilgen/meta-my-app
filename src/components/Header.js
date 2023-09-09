import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import food from "../assets/restaurantfood-1.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, located on Maldove
            Street in Chicago, Illionis. We focus on traditional recipes served
            with a modern twist.
          </p>
          <Link to="/reservations">
            <button>Reserve a Table</button>
          </Link>
        </article>
        <img src={food} alt="restaurant food" />
      </div>
    </div>
  );
};

export default Header;
