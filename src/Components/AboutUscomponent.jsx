import React from "react";

const AboutUscomponent = (props) => {
  return (
    <>
      {props.imgPos === true ? (
        <>
          <div className="container">
            <div className="imgCont">
              <img className="img" src={props.imgSrc} alt="" srcset="" />
            </div>
            <div className="content">
              <p className="contentText">{props.content}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container_left">
            <div className="imgCont">
              <img className="img" src={props.imgSrc} alt="" srcset="" />
            </div>
            <div className="content">
              <p className="contentText">{props.content}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AboutUscomponent;
