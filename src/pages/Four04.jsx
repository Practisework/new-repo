import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Four04 = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between ",
          flexDirection: {
            lg: "row",
            md: "column",
            sm: "column-reverse",
            xs: "column-reverse",
          },
        }}
      >
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTV5OGt5MjhyM2F1ZTNjYXdwbXRkMng0ZzJvbnl5a3RocDVzMTJ5biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/18Ouvl2RKhIqLekPSV/giphy.gif"
          alt=""
          srcset=""
          className="F04Img"
        />
        <Box>
          <Typography variant="h1">404 page not found</Typography>
          <Typography variant="p">Try clicking on the logo</Typography>
        </Box>
      </Container>
    </>
  );
};

export default Four04;
