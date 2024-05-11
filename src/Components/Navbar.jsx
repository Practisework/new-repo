import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { Container } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
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
      </Container>
    </>
  );
};

export default Navbar;
