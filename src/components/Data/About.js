import {
  faAws,
  faFigma,
  faGithub,
  faHtml5,
  faNodeJs,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";

export const SkillList = [
  {
    icon: faReact,
    description: "My main Javascript library for front-end development.",
    title: "React/Next.js",
  },
  {
    icon: faHtml5,
    description:
      "Mainly used for page skeleton and custom design, or libraries such as MUI, Bootstrap",
    title: "HTML5/CSS",
  },
  {
    icon: faSquareJs,
    description: "DOM element control and algorithm",
    title: "Javascript",
  },
  {
    icon: faNodeJs,
    description: "Used for backend development",
    title: "NodeJs",
  },
  ,
  {
    icon: faCube,
    description: "Basic understanding of 3d development",
    title: "Three.js",
  },
  {
    icon: faGithub,
    description: "Project Deployment and Management",
    title: "Github",
  },
  {
    icon: faAws,
    description: "Deployment and API",
    title: "AWS Amplify",
  },
  {
    icon: faFigma,
    description:
      "Basic understanding of design tool such as Figma, Photoshop,...",
    title: "Figma",
  },
];

export const AboutMe = [
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
    with different libraries such as React.js, Vue.js, Bootstrap, MUI, Three.js.
    I want to continue learning and growing my technical skill not only in
    front-end, but also back-end development with node.js, database management
    and web hosting. <br />
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
