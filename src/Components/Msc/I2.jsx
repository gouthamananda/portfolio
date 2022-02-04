import React from "react";
import { Box, Typography } from "@mui/material";

export default function I2(props) {
  const { t, p1, p2 } = props;
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "2rem" },
            my: 4,
            p: 1,
            borderRadius: 1,
            display: "inline",
            backgroundColor: "primary.main",
            color: "white",
          }}
          variant="h4"
        >
          {t}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={p1}
          sx={{
            width: { md: "25%", xs: "35%" },
            position: "center",
          }}
        />
        <Box
          component="img"
          src={p2}
          sx={{
            width: { md: "25%", xs: "35%" },
            position: "center",
          }}
        />
      </Box>
    </Box>
  );
}
