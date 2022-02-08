import React from "react";
import { Grid, Typography } from "@mui/material";
import ReactPlayer from "react-player/lazy";

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
        xs="12"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
      </Grid>
      <Grid
        container
        sx={{
          height: "50vh",
        }}
        spacing={1}
      >
        <Grid
          xs="12"
          md="5"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: 2,
          }}
          order={{ xs: 2, md: 1 }}
          item
        >
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste
            eius perspiciatis pariatur fugit labore placeat nam. Impedit omnis
            ut, nihil atque nobis, qui accusantium asperiores placeat quis
            reprehenderit quasi.
          </Typography>
        </Grid>
        <Grid
          xs="12"
          md="6"
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
            playing
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
