import React from "react";
import Data from "../Data/Implement_Data";
import Card from "../Components/Card";
import Contactform from "../Components/Contactform";

const Products = () => {
  return (
    <>
      {Data.map((val) => {
        return (
          <>
            <div className="cardCont">
              <Card
                prodLink={val.nameEng}
                imgSrc={val.imgUrl}
                name={val.name}
                info={val.content}
              />
              <Card
                prodLink={val.nameEng2}
                imgSrc={val.imgUrl2}
                name={val.name2}
                info={val.content2}
              />
            </div>
          </>
        );
      })}
      <Contactform />
    </>
  );
};

export default Products;
