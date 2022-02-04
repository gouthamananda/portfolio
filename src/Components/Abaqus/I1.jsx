import React from "react";
import { Box, Typography } from "@mui/material";

export default function I1(props) {
  const { t, v } = props;
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateAreas: `"heading"
                              "video"
      `,
        gridTemplateColumns: "1fr",
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
          gridArea: "video",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "10%",
        }}
      >
        <Box
          component="img"
          src={v}
          sx={{
            width: { md: "55%", xs: "75%" },
            position: "center",
          }}
        />
      </Box>
    </Box>
  );
}
