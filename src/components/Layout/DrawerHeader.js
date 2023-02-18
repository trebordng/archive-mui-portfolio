import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { IconLink } from "../Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

const DrawerHeader = (props) => {
  const { navigateAnchor, anchors, currentAnchor } = props;
  const [drawer, setDrawer] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(undefined);

  const handleListItemClick = (event, index, page) => {
    navigateAnchor(page.slug);
    setSelectedIndex(index);
    setDrawer(false);
  };

  return (
    <React.Fragment>
      <Drawer
        PaperProps={{
          sx: {
            zIndex: 9999,
            width: "50vw",
            backdropFilter: "blur(4px)",
            backgroundColor: "primary.main",
          },
        }}
        open={drawer}
        onClose={() => setDrawer(false)}
      >
        <List>
          {anchors.map((anchor, index) => (
            <ListItem
              key={index}
              sx={{
                background:
                  anchor.slug === currentAnchor && "#EFB15D !important",
                color:
                  anchor.slug === currentAnchor
                    ? "primary.main"
                    : "appeal.main",
                textDecoration: "none",
              }}
              button
              onClick={(event) => handleListItemClick(event, index, anchor)}
              selected={selectedIndex === index}
            >
              <ListItemText>
                <Typography variant="navText">{anchor.name}</Typography>
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <IconLink
              target="_blank"
              rel="noopener"
              href="https://github.com/trebordng"
              sx={{ p: "0 !important" }}
            >
              <FontAwesomeIcon icon={faSquareGithub} />
            </IconLink>
            <IconLink
              target="_blank"
              rel="noopener"
              href="https://www.facebook.com/profile.php?id=100028181002993"
              sx={{ p: "0 !important" }}
            >
              <FontAwesomeIcon icon={faSquareFacebook} />
            </IconLink>

            <IconLink
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/robert-tran-a49b251a4/"
              sx={{ p: "0 !important" }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </IconLink>
          </ListItem>
        </List>
      </Drawer>
      <WidgetsIcon
        sx={{ fontSize: "2rem", color: "appeal.main" }}
        onClick={() => setDrawer(!drawer)}
      />
    </React.Fragment>
  );
};

export default DrawerHeader;
