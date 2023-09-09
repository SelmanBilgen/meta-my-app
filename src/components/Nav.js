import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-frame">
        <Link className="nav" to="/">
          <img src={Logo} alt="logo"></img>
        </Link>
        <ul className="nav-ul">
          <Link className="nav" to="/">
            <li className="nav-ul">Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/menu">
            <li>Menu</li>
          </Link>
          <Link to="/reservations">
            <li>Reservations</li>
          </Link>
          <Link to="/order-online">
            <li>Order Online</li>
          </Link>
          <Link to="/Login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
