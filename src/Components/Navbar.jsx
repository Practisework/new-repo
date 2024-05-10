import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logoCont">
          <Link className="logo" to="/">
            <img src={logo} alt="" className="logoimg" />
          </Link>
        </div>
        <div className="nav">
          <Link to="/product">शेती अवजारे</Link>
          <Link to="/about">आमचे ध्येय</Link>
          <Link to="/contact">संपर्क करा</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
