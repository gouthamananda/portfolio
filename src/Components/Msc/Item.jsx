import React from "react";
import ReactPlayer from "react-player/lazy";
import { Box, Typography } from "@mui/material";

export default function Item({ t, p, v }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateAreas: `"heading heading"
                              "image video"
      `,
        gridTemplateColumns: "1fr 1fr",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ gridArea: "heading" }}>
        <Typography
          sx={{ textAlign: "center", fontSize: { xs: "1rem", md: "2rem" } }}
          variant="h4"
        >
          {t}
        </Typography>
      </Box>
      <Box
        sx={{
          gridArea: "image",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={p}
          sx={{
            width: { md: "60%", xs: "90%" },
          }}
        />
      </Box>

      <Box sx={{ gridArea: "video" }}>
        {/* <Box
          component="img"
          src={v}
          sx={{
            width: {
              md: "90%",
              xs: "90%",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        /> */}
        <ReactPlayer url={v} playing muted loop />
      </Box>
    </Box>
  );
}
