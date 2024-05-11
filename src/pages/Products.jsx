import React from "react";
import Data from "../Data/Implement_Data";
import Cards from "../Components/Card";
import Contactform from "../Components/Contactform";
import { Container } from "@mui/material";

const Products = () => {
  return (
    <>
      {Data.map((val) => {
        return (
          <>
            <Container
              sx={{
                display: "flex",
                flexDirection: {
                  lg: "row",
                  md: "row",
                  sm: "column",
                  xs: "column",
                },
                justifyContent: {
                  lg: "space-between",
                  md: "space-between",
                  sm: "center",
                  xs: "center",
                },
              }}
              className="cardCont"
            >
              <Cards
                prodLink={val.nameEng}
                imgSrc={val.imgUrl}
                name={val.name}
                info={val.content}
              />
              <Cards
                prodLink={val.nameEng2}
                imgSrc={val.imgUrl2}
                name={val.name2}
                info={val.content2}
              />
            </Container>
          </>
        );
      })}
      <Contactform />
    </>
  );
};

export default Products;
