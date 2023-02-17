import {
  Box,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Box
      id="Contact"
      sx={{
        maxWidth: "900px",
        boxSizing: "border-box",
        padding: "64px 0",
        width: "100%",
        "@media (min-width:900px)": {
          padding: "74px 0",
        },
      }}
    >
      <Typography variant="h3" sx={{ color: "appeal.main" }}>
        Let's Talk!
      </Typography>
      <Box
        component="form"
        sx={{
          width: "calc(100% - 60px)",
          borderRadius: "10px",
          color: "red",
          display: "flex",
          gap: "30px",
          justifyContent: "flex-start",
          padding: "30px",
          flexWrap: "wrap",
          background:
            "linear-gradient(to bottom, rgba(	229, 227, 229, 0.1), rgba(229, 227, 229, 0.1))",
          marginTop: "64px",
          "@media (min-width:900px)": {
            marginTop: "74px",
          },
        }}
      >
        <TextField
          label="Name"
          color="appeal"
          variant="outlined"
          sx={{
            width: "100%",
            "@media (min-width:600px)": {
              width: "calc(50% - 15px)",
            },
          }}
          InputLabelProps={{
            classes: {
              root: "textfield-label",
              focused: "textfield-label-focus",
            },
          }}
          InputProps={{
            classes: {
              root: "textfield",
              notchedOutline: "textfield",
            },
          }}
        />
        <TextField
          label="Email"
          color="appeal"
          variant="outlined"
          sx={{
            width: "100%",
            "@media (min-width:600px)": {
              width: "calc(50% - 15px)",
            },
          }}
          InputLabelProps={{
            classes: {
              root: "textfield-label",
              focused: "textfield-label-focus",
            },
          }}
          InputProps={{
            classes: {
              root: "textfield",
              notchedOutline: "textfield",
            },
          }}
        />{" "}
        <TextField
          label="Subject"
          color="appeal"
          variant="outlined"
          sx={{
            width: "100%",
          }}
          InputLabelProps={{
            classes: {
              root: "textfield-label",
              focused: "textfield-label-focus",
            },
          }}
          InputProps={{
            classes: {
              root: "textfield",
              notchedOutline: "textfield",
            },
          }}
        />
        <TextField
          label="Message"
          multiline
          rows={5}
          color="appeal"
          variant="outlined"
          sx={{
            width: "100%",
          }}
          InputLabelProps={{
            classes: {
              root: "textfield-label",
              focused: "textfield-label-focus",
            },
          }}
          InputProps={{
            classes: {
              root: "textfield",
              notchedOutline: "textfield",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Contact;
