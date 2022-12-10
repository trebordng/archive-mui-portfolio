import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, Fade, Typography } from "@mui/material";
import React from "react";

const SkillCard = (props) => {
  return (
    <Fade
      in={props.show}
      timeout={1000}
      style={{ transitionDelay: props.index * 200 + 500 }}
    >
      <Card
        sx={{
          display: "flex",
          borderRadius: "10px",
          background:
            "linear-gradient(to bottom, rgba(	229, 227, 229, 0.25), rgba(229, 227, 229, 0.15))",
          justifyContent: "center",
          width: "150px",
          height: "200px",
          "@media (min-width:900px)": {
            width: "200px",
            height: "250px",
          },
        }}
      >
        <CardContent
          sx={{
            textAlign: "center",
            rowGap: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          gutterBottom
        >
          <FontAwesomeIcon icon={props.icon} className="list-icon" />
          <Typography variant="cardText" sx={{ color: "appeal.main" }}>
            {props.title}
          </Typography>
          <Typography variant="cardText" sx={{ color: "light.main" }}>
            {props.description}{" "}
          </Typography>
        </CardContent>
      </Card>
    </Fade>
  );
};

export default SkillCard;
