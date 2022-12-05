import { Box, Fade, Grid, Typography } from "@mui/material";
import React from "react";
import { ProgressState } from "../Context/CanvasContext";

const About = () => {
  const { showAnchors } = ProgressState();
  const AboutMe = [
    <Typography variant="h3" sx={{ color: "appeal.main" }}>
      About Me
    </Typography>,
    <Typography
      variant="p"
      component="p"
      sx={{
        color: "light.main",
        marginTop: "15px",
        "@media (min-width:1200px)": {
          marginTop: "30px",
        },
      }}
    >
      I'm passionate in making{" "}
      <Typography variant="span" sx={{ color: "appeal.main" }}>
        front-end UI/UX design
      </Typography>{" "}
      with different libraries such as React.js, Vue.js, Bootstrap, MUI,
      Three.js. I want to continue learning and growing my technical skill not
      only in front-end, but also back-end development with node.js, database
      management and web hosting. <br />
      <br />I always give{" "}
      <Typography variant="span" component="span" sx={{ color: "appeal.main" }}>
        100% effort
      </Typography>{" "}
      to every line of code I make and love to be a bug catcher as well.
      <br />
      <br />
      Some things that I like: PC games, Soccer, Guitar.
    </Typography>,
  ];
  return (
    <Grid
      id="About"
      sx={{
        maxWidth: "1200px",
        padding: "60px 0",
        rowGap: "30px",
        justifyContent: "space-between",
        alignItems: "center",
        "@media (min-width:1200px)": {
          padding: "144px 74px",
        },
      }}
      container
    >
      <Grid
        item
        xs={12}
        md={5.5}
        sx={{ display: "flex", justifyContent: "center" }}
        id="Portrait"
      >
        <Fade in={showAnchors["Portrait"]} timeout={1000} >
          <Box
            sx={{
              borderRadius: "10px",
              width: "250px",
              height: "250px",
              maxWidth: "70%",
              maxHeight: "30%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "60% 20%",
              backgroundColor: "appeal.main",
              backgroundImage: `linear-gradient(to bottom, rgba(	14, 18, 22, 0.4), rgba(	14, 18, 22, 0.4)),
        url("portrait.png")`,
              "@media (min-width:900px)": {
                width: "600px",
                height: "600px",
                maxWidth: "100%",
                maxHeight: "100%",
              },
            }}
          />
        </Fade>
      </Grid>
      <Grid item xs={12} md={5.5} id="AboutMe">
        {AboutMe.map((element, index) => (
          <Fade
            key={index}
            in={showAnchors["AboutMe"]}
            timeout={1000}
            style={{ transitionDelay: (index + 1) * 500 }}
          >
            {element}
          </Fade>
        ))}
      </Grid>
    </Grid>
  );
};

export default About;
