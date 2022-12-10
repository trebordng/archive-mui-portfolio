import { Box, Fade, Slide, Typography } from "@mui/material";
import React, { useState } from "react";
import { ProgressState } from "../Context/CanvasContext";

const Intro = () => {
  const { setIntro } = ProgressState();
  const [loading, setLoading] = useState(true);
  return (
    <Slide
      in={loading}
      direction="right"
      timeout={{ enter: 0, exit: 1000 }}
      onExited={() => {
        setIntro(false);
      }}
    >
      <Box
        sx={{
          backgroundColor: "light.main",
          width: "100vw",
          height: "100vh",
          zIndex: "99999",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "primary.main",
          position: "fixed",
        }}
      >
        <Fade
          in
          timeout={1000}
          style={{transitionDelay:1000}}
          onEntered={() => {
            setTimeout(() => {
              setLoading(false);
            }, 2000);
          }}
        >
          <Typography variant="intro" sx={{padding:"0 24px"}}>
            Welcome to Robert Tran's Portfolio!
          </Typography>
        </Fade>
      </Box>
    </Slide>
  );
};

export default Intro;
