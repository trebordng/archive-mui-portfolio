import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, Box, Button, Fade, Link } from "@mui/material";
import React from "react";
import { ProjectLink } from "../Theme";

const ProjectCard = (props) => {
  const { index, project, showAnchors } = props;
  return (
    <Fade
      key={index}
      timeout={500}
      in={showAnchors["PortfolioProjects"]}
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
            alignItems: index % 2 === 0 ? "flex-end" : "flex-start",
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
            left: index % 2 === 0 && 0,
            right: index % 2 !== 0 && 0,
            height: "100%",
            width: "100%",
            "@media (min-width:900px)": {
              width: "60%",
            },
          }}
        >
          <Link
            target="_blank"
            rel="noopener"
            href={project.demo}
            sx={{
              borderRadius: "inherit",
              height: "100%",
              width: "100%",
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
                opacity: "0.5",
                transition: "all 0.5s",
                "@media (min-width:900px)": {
                  "&:hover": {
                    opacity: "0.9",
                    filter: "none",
                  },
                },
              }}
            />
          </Link>
        </Button>
        <Box
          sx={{
            zIndex: 2,
            "@media (min-width:900px)": {
              textAlign: index % 2 === 0 ? "right" : "left",
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
            variant="h4"
            sx={{
              color: "light.main",
            }}
          >
            {" "}
            {project.company}
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
                justifyContent: index % 2 === 0 && "flex-end",
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
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              marginTop: "8px",
              flexWrap: "wrap",
            }}
          >
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
              textAlign: index % 2 === 0 ? "right" : "left",
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
  );
};

export default ProjectCard;
