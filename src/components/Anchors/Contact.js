import {
  Box,
  Button,
  CircularProgress,
  Fade,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { ProgressState } from "../Context/CanvasContext";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Send } from "@mui/icons-material";

const Contact = () => {
  const { showAnchors } = ProgressState();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oi0y69p",
        "template_jlptrno",
        "#ContactBox",
        "UgAGXUn0vfna_94-h"
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 1500);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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
      <Fade
        in={showAnchors["Contact"]}
        timeout={500}
        style={{ transitionDelay: 500 }}
      >
        <Typography
          variant="h3"
          sx={{ color: "appeal.main" }}
          id="ContactTitle"
        >
          Let's Talk!
        </Typography>
      </Fade>
      <Fade
        in={showAnchors["ContactBox"]}
        timeout={500}
        style={{ transitionDelay: 750 }}
      >
        <Box
          id="ContactBox"
          ref={form}
          onSubmit={sendEmail}
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "calc(100% - 60px)",
            borderRadius: "10px",
            color: "red",
            gap: "30px",
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
            required
            label="Name"
            name="user_name"
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
            required
            label="Email"
            name="user_email"
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
            required
            label="Subject"
            name="subject"
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
            required
            label="Message"
            name="message"
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
          <Button
            type="submit"
            value="Send"
            variant="text"
            color="appeal"
            sx={{
              borderRadius: "4px",
              width: "120px",
              border: "1px solid red",
              borderColor: "appeal.main",
              height: "40px",
              maxHeight: "40px",
            }}
          >
            {success ? (
              <Fade in={success} timeout={500}>
                <CheckCircleIcon color="appeal" />
              </Fade>
            ) : !loading ? (
              <Fade in={true} timeout={1000} appear={false}>
                <Send color="appeal"/>
              </Fade>
            ) : (
              <CircularProgress
                color="appeal"
                sx={{ maxWidth: "23px", maxHeight: "23px" }}
              />
            )}
          </Button>
        </Box>
      </Fade>
    </Box>
  );
};

export default Contact;
