import React from "react";
import Logo from "../assets/Logo.svg";

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="logo"></img>
      <ul>
        <a href="\">
          <li>Home</li>
        </a>
        <a href="\">
          <li>About</li>
        </a>
        <a href="\">
          <li>Menu</li>
        </a>
        <a href="\">
          <li>Reservations</li>
        </a>
        <a href="\">
          <li>Order Online</li>
        </a>
        <a href="\">
          <li>Login</li>
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
