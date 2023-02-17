import {
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Slide,
  Zoom,
  Link,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProgressState } from "../Context/CanvasContext";
import Media from "./Media";

const Header = () => {
  const theme = useTheme();
  const isMed = useMediaQuery(theme.breakpoints.down("md"));
  const { intro, showAnchors, setShowAnchors } = ProgressState();

  const [currentAnchor, setCurrentAnchor] = useState("Landing");
  const [navbar, setNavbar] = useState(true);
  const [direction, setDirection] = useState("left");

  const anchors = [
    { name: "Home", slug: "Landing" },
    { name: "About", slug: "About" },
    { name: "Experience", slug: "Experience" },
    // { name: "Portfolio", slug: "Portfolio" },
    { name: "Contact", slug: "Contact" },
  ];

  if (window.history.scrollRestoration) {
    window.history.scrollRestoration = "manual";
  } else {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }

  const navigateAnchor = (anchor) => {
    var link = document.getElementById(anchor);
    window.scroll({
      left: 0,
      top: link.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    var oldScroll = 0;

    window.addEventListener("scroll", () => {
      anchors.forEach((anchor) => {
        const startY = document.getElementById(anchor.slug)?.offsetTop;
        const endY =
          document.getElementById(anchor.slug)?.offsetTop +
          document.getElementById(anchor.slug)?.clientHeight;
        const currentY = window.scrollY;
        var difference = 600/920 * window.screen.height
        if (startY - difference <= currentY && currentY < endY - difference) {
          //   window.history.pushState(null, null, "#" + anchor.slug);
          if (currentY > oldScroll) {
            setDirection("left");
            // setNavbar(false);
          } else {
            setDirection("right");
            // setNavbar(true);
          }
          oldScroll = currentY;
          setCurrentAnchor(anchor.slug);
        }
      });
      for (const [key, value] of Object.entries(showAnchors)) {
        const startY = document.getElementById(key)?.offsetTop;
        const endY =
          document.getElementById(key)?.offsetTop +
          document.getElementById(key)?.clientHeight;
          var difference = 600/920 * window.screen.height

        const currentY = window.scrollY;
        if (startY -difference <= currentY && currentY < endY -difference) {
          setShowAnchors(key, true);
        }
      }
    });
  }, []);

  return (
    <Toolbar
      sx={{
        position: "fixed",
        backgroundColor: navbar && "primary.main",
        left: 0,
        right: 0,
        top: "0px",
        zIndex: 9999,
        justifyContent: "space-between",
        // transition: "background-color 0.5s",
        minHeight: "64px",
        padding: "0 24px",
        "@media (min-width:900px)": {
          minHeight: "74px",
          padding: "0 74px",
        },
      }}
    >
      <Slide in={navbar && !intro} timeout={500}>
        <Link href="http://localhost:3000/">
          <Typography variant="logo">Trebor</Typography>
        </Link>
      </Slide>
      {isMed ? (
        <Box></Box>
      ) : (
        <React.Fragment>
          <Box
            sx={{
              width: "10px",
              height: "100vh",
              position: "fixed",
              bottom: "0px",
              left: "32px",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              alignContent: "flex-end",
              justifyContent: "center",
            }}
          >
            {anchors.map((anchor, index) => (
              <Zoom in={!intro} key={index}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: anchor.slug === currentAnchor ? "0" : "50%",
                    rotate: anchor.slug === currentAnchor ? "45deg" : 0,
                    minWidth: "10px",
                    width: "10px ",
                    height: "10px ",
                    padding: 0,
                    margin: "5px 0px",
                    backgroundColor:
                      anchor.slug === currentAnchor
                        ? "appeal.main"
                        : "neutral.main",
                    "&:hover": {
                      backgroundColor: "light.main",
                    },
                    transition: `transform 225ms cubic-bezier(0.4, 0, 0.2, 1) ${
                      1250 - index * 50
                    }ms, border-radius 0.5s,rotate 0.5s !important`,
                  }}
                  onClick={() => {
                    navigateAnchor(anchor.slug);
                  }}
                />
              </Zoom>
            ))}
          </Box>
          <Box sx={{ display: "flex" }}>
            {anchors.map((anchor, index) => (
              <Slide
                key={index}
                in={navbar && !intro}
                timeout={850 + index * 150}
              >
                <Button
                  sx={{
                    fontWeight: "700",
                    fontSize: "12px",
                    color:
                      anchor.slug === currentAnchor
                        ? "appeal.main"
                        : "neutral.main",
                    marginLeft: "16px",
                    "&:hover": {
                      color: "light.main",
                    },
                  }}
                  onClick={() => {
                    navigateAnchor(anchor.slug);
                  }}
                >
                  {anchor.name}
                  <Box
                    sx={{
                      width: anchor.slug === currentAnchor ?"100%":0,
                      position: "absolute",
                      height: "2px",
                      bottom: 0,
                      left:direction==="left" && 0,
                      right:direction==="right" && 0,

                      // left:
                      //   anchor.slug === currentAnchor
                      //     ? 0
                      //     : direction === "left"
                      //     ? -100
                      //     : 100,
                      opacity: anchor.slug === currentAnchor ? 1 : 0,
                      backgroundColor: "appeal.main",
                      transition:
                        anchor.slug === currentAnchor &&
                        "width 0.5s",
                    }}
                  />
                </Button>
              </Slide>
            ))}
            <Media intro={intro} />
            <Slide in={navbar && !intro} timeout={1600}>
              <Box
                sx={{
                  position: "fixed",
                  top: "19px",
                  borderWidth: "8x",
                  width: "8px",
                  height: "8px",
                  border: "1px solid red",
                  borderLeft: "none",
                  borderBottom: "none",
                  zIndex: "9999",
                  borderColor: "appeal.main",
                  "@media (min-width:900px)": {
                    right: "74px",
                  },
                }}
              />
            </Slide>
          </Box>
        </React.Fragment>
      )}
    </Toolbar>
  );
};

export default Header;
