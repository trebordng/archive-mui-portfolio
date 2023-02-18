import { Box, Fade, Grid, Typography } from "@mui/material";
import React from "react";
import { ProgressState } from "../Context/CanvasContext";
import SkillCard from "../Utils/SkillCard";
import { SkillList, AboutMe } from "../Data/About";

const About = () => {
  const { showAnchors } = ProgressState();

  return (
    <Grid
      id="About"
      sx={{
        maxWidth: "900px",
        padding: "128px 0 64px 0",
        rowGap: "30px",
        justifyContent: "space-between",
        alignItems: "center",
        "@media (min-width:900px)": {
          rowGap: "148px",
          padding: "296px 0 148px 0",
        },
      }}
      container
    >
      <Grid item xs={12} md={5.5} id="AboutMe">
        {AboutMe.map((element, index) => (
          <Fade
            key={index}
            in={showAnchors["AboutMe"]}
            timeout={500}
            style={{ transitionDelay: 500+ index * 250 }}
          >
            {element}
          </Fade>
        ))}
      </Grid>
      <Grid
        item
        xs={12}
        md={5.5}
        sx={{ display: "flex", justifyContent: "center" }}
        id="Portrait"
      >
        <Fade
          in={showAnchors["Portrait"] && showAnchors["AboutMe"]}
          timeout={500}
          style={{ transitionDelay: 1000 }}
        >
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
              backgroundImage: `linear-gradient(to bottom, rgba(	14, 18, 22, 0.25), rgba(	14, 18, 22, 0.25)),
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

      <Grid id="Skills">
        <Fade
          in={
            showAnchors["Skills"] &&
            showAnchors["Portrait"] &&
            showAnchors["AboutMe"]
          }
          timeout={500}
          style={{ transitionDelay: 500 }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            {SkillList.map((skill, index) => (
              <SkillCard
                key={index}
                show={
                  showAnchors["Skills"] &&
                  showAnchors["Portrait"] &&
                  showAnchors["AboutMe"]
                }
                index={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </Box>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default About;
