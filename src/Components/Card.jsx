import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.imgSrc} alt="" srcset="" />
        <Link to={props.prodLink} className="hoverinfo">
          <div>
            <h1 className="CardHead">{props.name}</h1>
            <p>{props.info}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
