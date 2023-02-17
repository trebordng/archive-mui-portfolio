import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Fade, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { ProgressState } from "../Context/CanvasContext";
import { projects, achievement } from "../Data/Projects";
import { ProjectLink } from "../Theme";

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
                            {work.tasks.map((task, taskId) => (
                              <Typography
                                index={taskId}
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
        <Box id="PortfolioTitle">
          <Fade
            timeout={500}
            in={showAnchors["PortfolioTitle"]}
            style={{ transitionDelay: 500 }}
          >
            <Typography
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
        </Box>
        <Box
          id="PortfolioProjects"
        >
          {projects?.map((project, index) => (
            <Fade
              timeout={500}
              key={index}
              in={
                showAnchors["PortfolioTitle"] &&
                showAnchors["PortfolioProjects"]
              }
              style={{ transitionDelay: 750 + index * 100 }}
            >
              <Box
                sx={{
                  minHeight: "400px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  marginTop: "64px",
                  justifyContent: "space-around",
                  "@media (min-width:900px)": {
                    marginTop: "74px",
                    padding: 0,
                    alignItems: index%2===0?"flex-end":"flex-start",
                  },
                }}
              >
                <Button
                  sx={{
                    borderRadius: "10px",
                    padding: 0,
                    position: "absolute",
                    backgroundColor: "primary.main",
                    top: 0,
                    left: index%2==0&&0,
                    right: index%2!=0&&0,
                    height: "100%",
                    width: "100%",
                    "@media (min-width:900px)": {
                      width: "60%",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={project.displayImage}
                    sx={{
                      objectFit: "cover",
                      borderRadius: "inherit",
                      height: "100%",
                      width: "100%",
                      filter: "grayscale(100%)",
                      opacity: "0.3",
                      transition: "all 0.5s",
                      "@media (min-width:900px)": {
                        "&:hover": {
                          opacity: "0.7",
                          filter: "none",
                        },
                      },
                    }}
                  />
                </Button>
                <Box
                  sx={{
                    zIndex: 2,
                    "@media (min-width:900px)": {
                      textAlign: index%2===0?"right":"left",
                    },
                  }}
                >
                  {" "}
                  <Typography
                    variant="h3"
                    sx={{
                      color: "appeal.main",
                    }}
                  >
                    {" "}
                    {project.title}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      color: "neutral.main",
                    }}
                  >
                    {" "}
                    {project.period}
                  </Typography>
                </Box>
                <Box sx={{ zIndex: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      "@media (min-width:900px)": {
                        justifyContent: index%2===0&&"flex-end",
                      },
                    }}
                  >
                    <ProjectLink
                      target="_blank"
                      rel="noopener"
                      href={project.demo}
                      sx={{ padding: 0 }}
                    >
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </ProjectLink>
                  </Box>
                  <Box sx={{ display: "flex", gap: "8px", marginTop: "8px",flexWrap:"wrap" }}>
                    {project.languages?.map((language, index) => (
                      <Typography
                        key={index}
                        variant="languages"
                        component="p"
                        sx={{ color: "neutral.main" }}
                      >
                        {language}
                      </Typography>
                    ))}
                  </Box>
                </Box>
                <Box
                  sx={{
                    borderRadius: "5px",
                    maxWidth: "100%",
                    zIndex: 2,
                    "@media (min-width:900px)": {
                      padding: "20px",
                      textAlign: index%2===0?"right":"left",
                      backgroundColor: "primary.lighter",
                      maxWidth: "70%",
                    },
                  }}
                >
                  <Typography variant="p" sx={{ color: "light.main" }}>
                    {project.description}
                  </Typography>
                </Box>
              </Box>
            </Fade>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
