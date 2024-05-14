import React from "react";
import Contactform from "../Components/Contactform";
import AboutUscomponent from "../Components/AboutUscomponent";
import { Container } from "@mui/material";

const IndieProduct = (props) => {
  return (
    <>
      <Container>
        <h1 className="header">{props.name}</h1>
        <AboutUscomponent
          imgSrc={props.img}
          imgPos={props.pos}
          content={props.content}
        />
      </Container>
      {props.table}
      <Contactform />
    </>
  );
};

export default IndieProduct;
