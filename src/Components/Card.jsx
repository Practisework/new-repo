import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: {
            lg: "45%",
            md: "50%",
            sm: "100%",
            xs: "100%  ",
          },
          my: "4vh",
        }}
      >
        <CardMedia
          sx={{ height: 250 }}
          image={props.imgSrc}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            {props.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "justify" }}
          >
            {props.info}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={props.prodLink}>
            <Button
              sx={{
                bgcolor: "primary.main",
                py: 2,
                px: 6,
                fontSize: "1.2rem",
                color: "secondary.main",
                ":hover": {
                  color: "primary.main",
                },
              }}
            >
              अधिक माहिती बघा
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default Cards;
