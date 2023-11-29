import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Nav.css";
import Navlinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [mobile, setMobile] = useState(true);

  const handleCheckboxBurger = () => {
    setMobile((current) => !current);
    //setMobile({ ...mobile, [e.target.name]: e.target.checked });
  };
  return (
    <nav>
      <div className="nav-frame">
        <Link className="nav" to="/">
          <img className="nav-logo" src={Logo} alt="logo"></img>
        </Link>
        <div className="normal">
          <Navlinks />
        </div>
        <div className="burgerContainer">
          {mobile ? (
            <FontAwesomeIcon
              className="faIcon"
              icon={faBars}
              style={{ color: "black", cursor: "pointer" }}
              onClick={handleCheckboxBurger}
              size="xl"
            />
          ) : (
            <>
              <FontAwesomeIcon
                className="faIcon"
                icon={faTimes}
                style={{ color: "black", cursor: "pointer" }}
                onClick={handleCheckboxBurger}
                size="xl"
              />
              <div className="burger">
                <Navlinks mobile={mobile} setMobile={setMobile} />
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
