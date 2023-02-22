import { Box, Button, Divider, Fade, Link, Typography } from "@mui/material";
import React from "react";
import { ProgressState } from "../Context/CanvasContext";

const Landing = () => {
  const { intro } = ProgressState();

  return (
    <Fade in={!intro} timeout={500} style={{ transitionDelay: 1450 }}>
      <Box
        id="Landing"
        sx={{
          borderRadius: "0 0 10px 10px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "calc(100vh - 82px)",
          overflow: "hidden",
          "-webkit-mask-image":
            " url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)" /* this fixes the overflow:hidden in Chrome/Opera */,
          "@media (min-width:600px)": {
            height: "calc(100vh - 90px)",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            clipPath: "inset(0)",
            backgroundImage:
              "linear-gradient(to bottom, rgba(	14, 18, 22, 1), rgba(	14, 18, 22, 0.5))",
          }}
        >
          <Box
            sx={{
              zIndex: "9",
              width: "100%",
              height: "100%",
              position: "sticky",
              top: 0,
              left: 0,
              backgroundImage:
                "linear-gradient(to bottom, rgba(	14, 18, 22, 1), rgba(	14, 18, 22, 0.5))",
            }}
          />
          <img className="landing-image" src="landing.jpg" />
        </Box>
        <Typography variant="h1" sx={{ color: "appeal.main", zIndex: 1 }}>
          Robert Tran.
        </Typography>
        <Typography variant="h2" sx={{ color: "light.main", zIndex: 1 }}>
          Front End Developer
        </Typography>
        <Link href="./RT resume.pdf" target="_blank" rel="noopener">
          <Button
            variant="outlined"
            sx={{
              marginTop: "16px",
            }}
            color="appeal"
          >
            My Resume
          </Button>
        </Link>
        <Divider
          orientation="vertical"
          sx={{
            zIndex: 9,
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
