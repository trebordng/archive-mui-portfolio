import {
  Box,
  Button,
  Divider,
  Fade,
  Typography,
} from "@mui/material";
import React from "react";
import { ProgressState } from "../Context/CanvasContext";

const Landing = () => {
  const { intro } = ProgressState();

  window.addEventListener("scroll", () => {
    const parallax = document.getElementById("Landing");
    const effect = window.scrollY/8;
    parallax.style.backgroundPositionY = effect + "px";
  });
  return (
    <Fade in={!intro} timeout={500} style={{ transitionDelay: 1450 }}>
      <Box
        id="Landing"
        sx={{
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "calc(100vh - 82px)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(to bottom, rgba(	14, 18, 22, 1), rgba(	14, 18, 22, 0.5)),
          url("landing.jpg")`,
          willChange: "background-position",
          "@media (min-width:600px)": {
            height: "calc(100vh - 90px)",
          },
        }}
      >
        <Typography variant="h1" sx={{ color: "appeal.main", zIndex: 1 }}>
          Robert Tran.
        </Typography>
        <Typography variant="h2" sx={{ color: "light.main", zIndex: 1 }}>
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
        <Divider
          orientation="vertical"
          sx={{
            backgroundColor: "neutral.main",
            position: "absolute",
            bottom: "-18px",
            left: "50%",
            height: "25%",
          }}
        />
      </Box>
    </Fade>
  );
};

export default Landing;
