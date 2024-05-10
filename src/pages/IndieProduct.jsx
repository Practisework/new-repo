import React from "react";
import Contactform from "../Components/Contactform";
import AboutUscomponent from "../Components/AboutUscomponent";

const IndieProduct = (props) => {
  return (
    <>
      <h1 className="header">{props.name}</h1>
      <AboutUscomponent
        imgSrc={props.img}
        imgPos={props.pos}
        content={props.content}
      />
      {props.table}
      <Contactform />
    </>
  );
};

export default IndieProduct;
