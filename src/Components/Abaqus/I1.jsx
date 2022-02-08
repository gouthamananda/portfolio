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

export default function I1(props) {
  const { t, v, p } = props;
  return (
    <Box>
      <Box sx={{}}>
        <Typography
          sx={{ textAlign: "center", fontSize: { xs: "1.5rem", md: "3rem" } }}
          variant="h3"
        >
          {t}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Box
          component="img"
          src={v}
          sx={{
            width: { xs: "100%", md: "30%" },
          }}
        />
        <Box
          component="img"
          src={p}
          sx={{ width: { xs: "100%", md: "30%" } }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography sx={{ fontWeight: 700 }}> ANALYSIS SUMMARY :</Typography>
          <Typography align="justify" variant="body1">
            Design and analysis of UAV wing model for static, Dynamic and
            Aeroelastic Analysis
          </Typography>
          <List dense>
            <Point>Aluminium tube, rigid walls</Point>
            <Point>Nonlinearity: plastic strain, Large Deformation ON</Point>
            <Point>2D Shell Elements</Point>
            <Point>Tie contact (Node to Surface), Self Contact</Point>
            <Point>Dynamic Explicit Time period: 0.07s</Point>
          </List>
        </Box>
      </Box>
      <Typography
        variant="h3"
        align="center"
        sx={{ fontSize: { xs: "1.3rem", md: "2.5rem" }, color: "red" }}
      >
        Still More to Come, Updating soon...
      </Typography>
    </Box>
  );
}
