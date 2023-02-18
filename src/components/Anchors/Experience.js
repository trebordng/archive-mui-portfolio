import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Fade, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { ProgressState } from "../Context/CanvasContext";
import { projects, achievement } from "../Data/Projects";
import ProjectCard from "../Utils/ProjectCard";

const Experience = () => {
  const { showAnchors } = ProgressState();
  const [oldTab, setOldTab] = useState(0);
  const [tab, setTab] = useState(0);
  const places = ["QUT", "Zerowaste", "Navitas", "Centra", "Pakko"];

  return (
    <Box
      id="Experience"
      sx={{
        maxWidth: "900px",
        boxSizing: "border-box",
        padding: "64px 0",
        width: "100%",
        "@media (min-width:900px)": {
          padding: "148px 0px",
        },
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box id="ExperienceTitle">
          <Fade
            timeout={500}
            in={showAnchors["ExperienceTitle"]}
            style={{ transitionDelay: 500 }}
          >
            <Typography variant="h3" color="appeal.main">
              Where I've Been
            </Typography>
          </Fade>
          <Fade
            timeout={500}
            in={showAnchors["ExperienceTitle"] && showAnchors["ExperienceList"]}
            style={{ transitionDelay: 750 }}
          >
            <Grid
              container
              sx={{
                marginTop: "74px",
                flexDirection: "column",
                "@media (min-width:900px)": {
                  flexDirection: "row",
                },
              }}
              id="ExperienceList"
            >
              <Grid
                item
                md={4}
                sx={{
                  display: "flex",
                  maxWidth: "100%",
                  overflow: "scroll",
                  flexWrap: "nowrap",
                  "@media (min-width:900px)": {
                    overflow: "hidden",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                    borderRight: "1px solid red",
                    borderColor: "neutral.main",
                  },
                }}
              >
                {places.map((place, index) => (
                  <Button
                    key={index}
                    color="neutral"
                    onClick={() => {
                      setOldTab(tab);
                      setTab(index);
                    }}
                    sx={{
                      minWidth: "unset",
                      fontSize: "16px",
                      width: "100%",
                      textTransform: "none",
                      padding: "15px 7.5px",
                      "@media (min-width:900px)": {
                        padding: "15px",
                      },
                      // borderRight: tab === index ? "1px solid red":"none",
                      borderRadius: 0,
                      // borderColor: "appeal.main",
                      // transition: "all 1s ease-in"
                    }}
                  >
                    <Typography
                      variant="p"
                      component="p"
                      sx={{
                        // transition: "all 1s",
                        color: tab === index ? "appeal.main" : "neutral.main",
                      }}
                    >
                      {place}
                    </Typography>
                    <Box
                      sx={{
                        "@media (min-width:900px)": {
                          width: "2px",
                          height: tab === index ? "100%" : 0,
                          top: tab >= oldTab && 0,
                          bottom: tab < oldTab && 0,
                          left: 0,
                          transition: "height 0.5s ease-out",
                        },
                        "@media (max-width:890px)": {
                          width: tab === index ? "100%" : 0,
                          height: "2px",
                          left: tab >= oldTab && 0,
                          right: tab < oldTab && 0,
                          top: 0,
                        },
                        transition: "width 0.5s ease-out",
                        position: "absolute",
                        opacity: tab === index ? 1 : 0,
                        backgroundColor: "appeal.main",
                      }}
                    />
                  </Button>
                ))}
              </Grid>
              <Grid
                item
                md={8}
                sx={{
                  "@media (max-width:899px)": {
                    justifyContent: "center",
                    alignContent: "center",
                    textAlign: "center",
                    marginTop: "30px",
                  },
                  "@media (min-width:900px)": {
                    paddingLeft: "60px",
                  },
                  display: "flex",
                }}
              >
                {achievement.map(
                  (work, index) =>
                    tab === index && (
                      <Fade key={index} in={index === tab} timeout={500}>
                        <Box>
                          <Typography
                            variant="p"
                            component="p"
                            sx={{ color: "light.main" }}
                          >
                            {work.company}
                          </Typography>
                          <Typography
                            variant="p"
                            component="p"
                            sx={{ color: "appeal.main" }}
                          >
                            {work.title}
                          </Typography>
                          <Typography
                            variant="p"
                            component="p"
                            sx={{ color: "neutral.main" }}
                          >
                            {work.time}
                          </Typography>
                          <Box
                            sx={{ color: "neutral.main", marginTop: "15px" }}
                          >
                            {work.tasks.map((task, taskIndex) => (
                              <Typography
                                key={taskIndex}
                                variant="p"
                                component="p"
                                sx={{ color: "neutral.main", marginTop: "5px" }}
                              >
                                - {task}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      </Fade>
                    )
                )}
              </Grid>
            </Grid>
          </Fade>
        </Box>
        <Fade
          timeout={500}
          in={showAnchors["PortfolioTitle"] || showAnchors["PortfolioProjects"]}
          style={{ transitionDelay: 500 }}
        >
          <Typography
            id="PortfolioTitle"
            variant="h3"
            color="appeal.main"
            sx={{
              marginTop: "128px",
              "@media (min-width:900px)": {
                marginTop: "148px",
              },
            }}
          >
            What I've Done
          </Typography>
        </Fade>
        <Box id="PortfolioProjects">
          {projects?.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              project={project}
              showAnchors={showAnchors}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
