import React from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import Arrow from "@mui/icons-material/ArrowRightAlt";

import ReactPlayer from "react-player/lazy";

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

export default function Home() {
  return (
    <Grid
      container
      sx={{
        height: "90vh",
      }}
      spacing={1}
    >
      <Grid
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        item
      >
        <Typography
          variant="h2"
          component="h1"
          align="center"
          sx={{
            color: "text.main",
            fontFamily: "Poppins,sans-serif",
            fontSize: { xs: "3rem", sm: "4rem", md: "4.5rem" },
            fontWeight: "200",
          }}
        >
          Hello, I am Goutham Ananda
        </Typography>
        <Typography
          variant="h6"
          component="h5"
          sx={{
            color: "text.main",
            fontFamily: "Poppins,sans-serif",
            width: "80%",
            fontWeight: "200",
            textAlign: "center",
          }}
        >
          I recently completed my masters in Aerospace engineering from
          Concordia University. Currently looking for fulltime oppurtunities in
          Design, Stress Analysis & FEA.
        </Typography>
      </Grid>
      <Grid
        container
        sx={{
          height: "50vh",
        }}
        spacing={1}
      >
        <Grid
          xs={12}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mx: 2,
            background: "white",
          }}
          order={{ xs: 2, md: 1 }}
          item
        >
          <Typography sx={{ textTransform: "uppercase", fontWeight: 500 }}>
            Why hire me?
          </Typography>
          <List dense>
            <Point>
              I have more than 2+ years of academic experience in FEA, Designing
              (CAD) using industry-standard tools and am also certified in the
              same.
            </Point>
            <Point>
              Very strong Engineering Aptitude and Excellent Communication
              skills.
            </Point>
            <Point>
              I came to Montreal 2 years ago and amidst all the busy life I gave
              my every day to learn french and I have reached an intermediate
              level.
            </Point>
            <Point>
              I never got an opportunity in the industry hence motivating me to
              work hard for the company that invests in me.
            </Point>
          </List>
        </Grid>
        <Grid
          xs={12}
          md={6}
          order={{ xs: 1, md: 2 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          item
        >
          <ReactPlayer
            url="https://www.youtube.com/embed/IlpnJe__zJw"
            width="100%"
            controls
            playing
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
