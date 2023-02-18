import React from "react";
import { Box } from "@mui/material";
import { ProgressState } from "../Context/CanvasContext";
import Header from "./Header";
import Intro from "./Intro";
import Footer from "./Footer";

const index = ({ children }) => {
  const { intro } = ProgressState();

  return (
    <React.Fragment>
      {intro && <Intro />}
      <Box
        id="wrapper"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "primary.main",
          minHeight: "100vh",
          padding: "64px 24px 18px 24px",
          "@media (min-width:600px)": {
            padding: "72px 24px 18px 24px",
          },
          "@media (min-width:900px)": {
            padding: "72px 74px 18px 74px",
          },
        }}
      >
        <Header />
        {children}
        <Footer />
      </Box>
    </React.Fragment>
  );
};

export default index;
