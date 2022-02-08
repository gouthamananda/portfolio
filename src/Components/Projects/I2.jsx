import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import Arrow from "@mui/icons-material/ArrowRightAlt";

import p81 from "../../Assets/p81.png";
import p82 from "../../Assets/p82.png";
import p83 from "../../Assets/p83.png";
import p84 from "../../Assets/p84.png";
import p85 from "../../Assets/p85.png";
import p86 from "../../Assets/p86.png";

import v4 from "../../Assets/v4.gif";

function Point(props) {
  return (
    <List dense>
      <ListItem>
        <ListItemIcon>
          <Arrow />
        </ListItemIcon>
        <ListItemText primary={props.children} />
      </ListItem>
    </List>
  );
}

export default function I2() {
  return (
    <Box>
      <Typography
        align="center"
        variant="h3"
        sx={{
          textTransform: "uppercase",
          fontWeight: 600,
          fontSize: { xs: "1rem", md: "2rem", lg: "2.5rem" },
        }}
      >
        2.Simulation FEM d'impact d'oiseau sur une plaque en composite et
        corrélation avec des essais
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box component="img" src={v4} sx={{ width: "50%" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          my: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Box component="img" src={p81} sx={{ width: "95%" }} />
          <Box component="img" src={p82} sx={{ width: "95%" }} />
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box component="img" src={p83} sx={{ width: "50%" }} />
            <Box component="img" src={p84} sx={{ width: "50%" }} />
            <Box component="img" src={p85} sx={{ width: "50%" }} />
            <Box component="img" src={p86} sx={{ width: "50%" }} />
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography align="justify" variant="body1">
            <Typography sx={{ fontWeight: 700 }}> OBJECTIVES :</Typography> To
            carry out birdstrike simulation on a composite panel located on nose
            cone ahead of the Aircraft cockpit and compare results with test
            curves
          </Typography>
          <Typography align="justify" variant="body1">
            <Typography sx={{ fontWeight: 700 }}> TOOLS USED :</Typography> LS
            DYNA, Altair Hypermesh
          </Typography>
          <Typography sx={{ fontWeight: 700, my: 2 }}> OVERVIEW :</Typography>{" "}
          <Point>
            Conceptual Design achieved using historical design data and various
            trade-off studies
          </Point>
          <Point>
            Preliminary detailed design of wing using aerodynamic loads
          </Point>
          <Point>All design calculations carried out using excel</Point>
          <Point>
            CAD model of the conceptual aircraft created using Solidworks
          </Point>
          <Point>Static stress analysis of the wing model using MSC tool</Point>
          <Point>
            The power requirements for the design questions the airworthiness of
            aircraft & credibility of current technology{" "}
          </Point>
        </Box>
      </Box>
    </Box>
  );
}
