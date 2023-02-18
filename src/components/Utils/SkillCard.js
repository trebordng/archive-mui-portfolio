import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, Fade, Typography } from "@mui/material";
import React from "react";

const SkillCard = (props) => {
  const { icon, title, description } = props;
  return (
    <Card
      sx={{
        display: "flex",
        borderRadius: "10px",
        background:
          "linear-gradient(to bottom, rgba(	229, 227, 229, 0.1), rgba(229, 227, 229, 0.1))",
        justifyContent: "center",
        width: "150px",
        height: "200px",
        "@media (max-width:362px)": {
          width: "100%",
          height: "unset",
        },
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
      >
        <FontAwesomeIcon icon={icon} className="list-icon" />
        <Typography variant="cardText" sx={{ color: "appeal.main" }}>
          {title}
        </Typography>
        <Typography variant="cardText" sx={{ color: "light.main" }}>
          {description}{" "}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
