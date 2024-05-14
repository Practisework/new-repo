import {
  Box,
  Button,
  Container,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Contactform = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [prod, setProd] = useState("");
  let [addr, setAddr] = useState("");

  const Submitform = async (event) => {
    event.preventDefault();
    fetch(
      "https://testing-7f0a5-default-rtdb.asia-southeast1.firebasedatabase.app/userData.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Phone_no: phone,
          Product: prod,
          Address: addr,
        }),
      }
    );
    window.alert("आम्ही तुम्हाला थोड्या वेळा नंतर कॉल करू");
  };

  return (
    <>
      <Container
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="main"
      >
        <form action="Post">
          <OutlinedInput
            type="text"
            value={name}
            sx={{
              width: "100%",
              mx: 2,
              my: 1,
              borderRadius: { lg: "50px", md: "30px", sm: "20px", xs: "10px" },
              px: 4,
              color: "primary.main",
              fontSize: "2rem",
            }}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="तुमचे नाव"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
              justifyContent: "center",
            }}
          >
            <OutlinedInput
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              sx={{
                width: { lg: "100", md: "100%", sm: "100%" },
                mx: 2,
                my: 1,
                borderRadius: {
                  lg: "50px",
                  md: "30px",
                  sm: "20px",
                  xs: "10px",
                },
                px: 4,
                color: "primary.main",
                fontSize: "2rem",
              }}
              value={email}
              placeholder="इ-मेल"
            />
            <OutlinedInput
              type="text"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              sx={{
                width: { lg: "100", md: "100%", sm: "100%" },
                mx: 2,
                my: 1,
                borderRadius: {
                  lg: "50px",
                  md: "30px",
                  sm: "20px",
                  xs: "10px",
                },
                px: 4,
                color: "primary.main",
                fontSize: "2rem",
              }}
              value={phone}
              placeholder="फोन नं."
            />
          </Box>
          <OutlinedInput
            type="text"
            value={prod}
            onChange={(e) => {
              setProd(e.target.value);
            }}
            sx={{
              width: "100%",
              mx: 2,
              my: 1,
              borderRadius: { lg: "50px", md: "30px", sm: "20px", xs: "10px" },
              px: 4,
              color: "primary.main",
              fontSize: "2rem",
            }}
            placeholder="तुम्ही खरेदी करू इच्छित अवजाराचे नाव"
          />
          <OutlinedInput
            type="text"
            onChange={(e) => {
              setAddr(e.target.value);
            }}
            value={addr}
            sx={{
              width: "100%",
              mx: 2,
              my: 1,
              borderRadius: { lg: "50px", md: "30px", sm: "20px", xs: "10px" },
              px: 4,
              color: "primary.main",
              fontSize: "2rem",
            }}
            placeholder="तुमचा पत्ता"
          />
          <Button
            variant="outlined"
            sx={{
              px: 6,
              py: 2,
              borderRadius: 50,
              width: { lg: "45%", md: "100%", sm: "100%" },
              ":hover": {
                bgcolor: "primary.main",
                color: "secondary.main",
              },
            }}
            onClick={Submitform}
          >
            <Typography variant="h2">नोंदणी पूर्ण करा</Typography>
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Contactform;
