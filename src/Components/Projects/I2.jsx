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
    <ListItem>
      <ListItemIcon>
        <Arrow />
      </ListItemIcon>
      <ListItemText primary={props.children} />
    </ListItem>
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
        <Box
          component="img"
          src={v4}
          sx={{ width: { xs: "100%", md: "50%" } }}
        />
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
          <Typography sx={{ fontWeight: 700 }}> OBJECTIVES :</Typography>
          <Typography align="justify" variant="body1">
            To carry out birdstrike simulation on a composite panel located on
            nose cone ahead of the Aircraft cockpit and compare results with
            test curves
          </Typography>
          <Typography sx={{ fontWeight: 700 }}> TOOLS USED :</Typography>
          <Typography align="justify" variant="body1">
            LS DYNA, Altair Hypermesh
          </Typography>
          <Typography sx={{ fontWeight: 700, my: 2 }}>
            CASE STUDY OVERVIEW :
          </Typography>
          <Typography align="justify" variant="body1">
            The meshed model from Hypermesh was imported and analyzed on
            LS-DYNA, correlation was carried out using LS-prepost by:
          </Typography>
          <List dense>
            <Point>Visual comparison of Simulated and actual Test panel</Point>
            <Point>
              Identifying Stress concentration regions in metallic components
              from fringe plots
            </Point>
            <Point>Symmetric Loading and central impact check </Point>
            <Point>
              Co-relation between Loadcells on LS Dyna with Test Curves
            </Point>
            <Point>Peak Value of total forces</Point>
            <Point>Impulse Force co-relation</Point>
            <Point>
              Aluminum Beam Permanent Deformation Comparison with test results.
            </Point>
          </List>
        </Box>
      </Box>
    </Box>
  );
}
