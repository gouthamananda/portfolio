import React from "react";
import { Grid, Typography } from "@mui/material";

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
          align="left"
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
    </Grid>
  );
}
