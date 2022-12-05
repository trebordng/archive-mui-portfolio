import { Box, Button, Fade, Typography } from "@mui/material";
import React from "react";
import { ProgressState } from "../Context/CanvasContext";

const Landing = () => {
  const { intro } = ProgressState();

  return (
    <Fade in={!intro} timeout={500} style={{ transitionDelay: 1450 }}>
      <Box
        id="Landing"
        sx={{
            borderRadius:"10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "calc(100vh - 82px)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "30% 20%",
          backgroundAttachment: "fixed",
          backgroundImage: `linear-gradient(to bottom, rgba(	14, 18, 22, 0.7), rgba(	14, 18, 22, 0.9)),
        url("landing.jpg")`,
          "@media (min-width:600px)": {
            height: "calc(100vh - 90px)",
          },
        }}
      >
        <Typography variant="h1" sx={{ color: "appeal.main" }}>
          Robert Tran.
        </Typography>
        <Typography variant="h2" sx={{ color: "light.main" }}>
          Front End Developer
        </Typography>
        <Button
          variant="outlined"
          sx={{
            marginTop: "16px",
          }}
          color="appeal"
        >
          Resume
        </Button>
      </Box>
    </Fade>
  );
};

export default Landing;
