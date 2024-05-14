import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import React from "react";

const AboutUscomponent = (props) => {
  return (
    <>
      {props.imgPos === true ? (
        <>
          <Card sx={{ maxWidth: "100%" }}>
            <Box
              sx={{
                maxWidth: "100%",
                display: "flex",
                flexDirection: {
                  lg: "row",
                  md: "column",
                  sm: "column",
                  xs: "column",
                },
                justifyContent: "space-around",
              }}
            >
              <CardMedia
                sx={{ height: 400, width: "400vh" }}
                image={props.imgSrc}
                title="green iguana"
              />
              <CardContent
                sx={{
                  width: { lg: "400vh", md: "100%", sm: "100%", xs: "100%" },
                  height: "100%",
                  textAlign: "justify",
                }}
              >
                <Typography variant="p" sx={{ textWrap: "wrap" }} color="#000">
                  {props.content}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </>
      ) : (
        <>
          <Card sx={{ maxWidth: "100%" }}>
            <Box
              sx={{
                maxWidth: "100%",
                display: "flex",
                flexDirection: {
                  lg: "row",
                  md: "column-reverse",
                  sm: "column-reverse",
                  xs: "column-reverse",
                },
                justifyContent: "space-around",
              }}
            >
              <CardContent
                sx={{
                  width: { lg: "400vh", md: "100%", sm: "100%", xs: "100%" },
                  height: "100%",
                  textAlign: "justify",
                }}
              >
                <Typography variant="p" sx={{ textWrap: "wrap" }} color="#000">
                  {props.content}
                </Typography>
              </CardContent>
              <CardMedia
                sx={{ height: 400, width: "400vh" }}
                image={props.imgSrc}
                title="green iguana"
              />
            </Box>
          </Card>
        </>
      )}
    </>
  );
};

export default AboutUscomponent;
