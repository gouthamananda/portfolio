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

import p71 from "../../Assets/p71.png";
import p72 from "../../Assets/p72.png";
import p73 from "../../Assets/p73.png";
import p74 from "../../Assets/p74.png";
import p75 from "../../Assets/p75.png";
import p76 from "../../Assets/p76.png";
import p77 from "../../Assets/p77.png";

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

export default function I4() {
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
        1.Conceptual Design of all Electric Aircraft
      </Typography>
      <Box component="img" src={p71} sx={{ width: "95%" }} />

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
          }}
        >
          <Box component="img" src={p72} sx={{ width: "95%" }} />
          <Box component="img" src={p77} sx={{ width: "95%" }} />
          <Box component="img" src={p73} sx={{ width: "95%" }} />
          <Box component="img" src={p74} sx={{ width: "95%" }} />
          <Box component="img" src={p75} sx={{ width: "95%" }} />
          <Box component="img" src={p76} sx={{ width: "95%" }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography align="justify" variant="body1">
            <Typography sx={{ fontWeight: 700 }}> OBJECTIVES :</Typography> To
            design a next-generation all-electric regional aircraft with the
            following requirements. Crew: 2 Passengers: 70 Max Takeoff weight:
            35000 lb Range: 1000 miles Ceiling: 25000 ft Take off Distance: &lt;
            3000ft Landing Distance: &lt; 2500ft
          </Typography>
          <Typography align="justify" variant="body1">
            <Typography sx={{ fontWeight: 700 }}> TOOLS USED :</Typography>{" "}
            SOLIDWORKS, MSC PATRAN & NASTRAN, Excel
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
