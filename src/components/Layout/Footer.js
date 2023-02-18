import { Typography, Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Typography
        variant="navText"
        sx={{
          color: "neutral.main",
        }}
      >
        @Robert Tran 2023
      </Typography>
    </Box>
  );
};

export default Footer;
