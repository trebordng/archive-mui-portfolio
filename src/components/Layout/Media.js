import {
  faLinkedin,
  faSquareFacebook,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Divider, Zoom } from "@mui/material";
import React from "react";
import { IconLink } from "../Theme";

const Media = (props) => {
  const list = [
    <IconLink
      target="_blank"
      rel="noopener"
      href="https://github.com/trebordng"
    >
      <FontAwesomeIcon icon={faSquareGithub} />
    </IconLink>,
    <IconLink
      target="_blank"
      rel="noopener"
      href="https://www.facebook.com/profile.php?id=100028181002993"
    >
      <FontAwesomeIcon icon={faSquareFacebook} />
    </IconLink>,
    <IconLink
      target="_blank"
      rel="noopener"
      href="https://www.linkedin.com/in/robert-tran-a49b251a4/"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </IconLink>,
    <Divider
      sx={{
        width: "64px",
        height: "1px",
        backgroundColor: "neutral.main",
      }}
    />,


  ];
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          zIndex: 9999,
          position: "fixed",
          alignItems: "center",
          gap: "5px",
          transform: "rotate(-90deg)",
          "@media (min-width:600px)": {
            left: "-54px",
            bottom: "86px",
          },
        }}
      >
        {list.map((element, index) => (
          <Zoom
            in={!props.intro}
            key={index}
            style={{ transitionDelay: 900 + 50 * index }}
          >
            {element}
          </Zoom>
        ))}
      </Box>
    </React.Fragment>
  );
};

export default Media;
