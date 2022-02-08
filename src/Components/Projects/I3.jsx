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

import p91 from "../../Assets/p91.png";
import p92 from "../../Assets/p92.png";
import p93 from "../../Assets/p93.png";
import p94 from "../../Assets/p94.png";
import p95 from "../../Assets/p95.png";
import p96 from "../../Assets/p96.png";

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

export default function I3() {
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
        3.Design and Development of UAV Wing model for Aeroelastic Analysis
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          component="img"
          src={p91}
          sx={{ width: { xs: "100%", md: "30%" } }}
        />
        <Box
          component="img"
          src={p92}
          sx={{ width: { xs: "100%", md: "30%" } }}
        />
        <Box
          component="img"
          src={p93}
          sx={{ width: { xs: "100%", md: "30%" } }}
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
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box
              component="img"
              src={p94}
              sx={{ width: { xs: "100%", md: "70%" } }}
            />
            <Box
              component="img"
              src={p95}
              sx={{ width: { xs: "100%", md: "70%" } }}
            />
            <Box
              component="img"
              src={p96}
              sx={{ width: { xs: "100%", md: "70%" } }}
            />
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: 700 }}> OBJECTIVES :</Typography>
          <Typography align="justify" variant="body1">
            Design and analysis of UAV wing model for static, Dynamic and
            Aeroelastic Analysis
          </Typography>
          <Typography sx={{ fontWeight: 700 }}> TOOLS USED :</Typography>
          <Typography align="justify" variant="body1">
            CATIA V5, MSC PATRAN & NASTRAN, Excel
          </Typography>
          <Typography sx={{ fontWeight: 700, my: 2 }}>OVERVIEW :</Typography>

          <List dense>
            <Point>
              A high Altitude(18km) and long endurance (28 hr) UAV used as
              reference for the detail design of wing
            </Point>
            <Point>
              Wing design based on operating requirements considering structural
              and aerodynamic aspect of loading
            </Point>
            <Point>
              Supercritical airfoil for Wing internal design and Thickness of
              the airfoil used to determine the number of Spars and ribs
            </Point>
            <Point>
              2D wing design analysed using MSC PATRAN & NASTRAN to study the
              response
            </Point>
            <Point>
              Wing was optimised to meet the aeroelastic requirements. Flutter
              and divergence speeds well above operating range
            </Point>
          </List>
        </Box>
      </Box>
    </Box>
  );
}
