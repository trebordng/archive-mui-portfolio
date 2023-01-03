import styled from "@emotion/styled";
import { createTheme } from "@mui/material/styles";
import Link from "@mui/material/Link";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0e1216",
      glass: "rgba(14, 18, 22,0.7)",
      lighter:"#161c22"
    },
    appeal: {
      main: "#EFB15D",
    },
    light: {
      main: "#E5E3E5",
    },
    neutral: {
      main: "#929193",
    },
  },
});

theme.typography.logo = {
  fontSize: "16px",
  fontWeight: "bolder",
  fontFamily: "Cormorant Garamond",
  color: theme.palette.neutral.main,
  "@media (min-width:600px)": {
    fontSize: "20px",
  },
  "&:hover": {
    color: theme.palette.appeal.main,
  },
};

theme.typography.h1 = {
  lineHeight: "1.25",
  whiteSpace: "nowrap",
  fontWeight: 900,
  fontSize: "32px",
  fontFamily: "Cormorant Garamond",
  "@media (min-width:900px) ": {
    fontSize: "48px",
  },
};

theme.typography.h2 = {
  lineHeight: "1",
  fontWeight: "400",
  fontSize: "16px",
  "@media (min-width:900px) ": {
    fontSize: "24px",
  },
};

theme.typography.intro = {
  textAlign: "center",
  lineHeight: "1",
  fontWeight: "lighter",
  fontFamily: "Cormorant Garamond",
  fontSize: "32px",
};

theme.typography.h3 = {
  lineHeight: "1.25",
  fontWeight: "light",
  fontFamily: "Cormorant Garamond",
  fontSize: "32px",
};

theme.typography.p = {
  wordBreak: "beak-all",
  fontWeight: "light",
  lineHeight: "1.75",
  fontSize: "16px",
};

theme.typography.languages = {
  wordBreak: "beak-all",
  fontWeight: "light",
  lineHeight: "1.75",
  fontSize: "12px",
};

theme.typography.cardText = {
  fontWeight: "light",
  lineHeight: "1.25",
  fontSize: "14px",
  "@media (min-width:900px) ": {
    fontSize: "16px",
  },
};
export const IconLink = styled(Link)((props) => ({
  fontSize: "1.75rem",
  padding: "5px",
  display: "flex",
  color: theme.palette.neutral.main,
  "&:hover": {
    color: theme.palette.appeal.main,
  },
}));

export const ProjectLink = styled(Link)((props) => ({
  fontSize: "1.75rem",
  display: "flex",
  color: theme.palette.neutral.main,
  "&:hover": {
    color: theme.palette.appeal.main,
  },
}));
