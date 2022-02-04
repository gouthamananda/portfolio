import React from "react";
import { Box, Typography } from "@mui/material";

export default function I4(props) {
  const { t, p1, p2, p3, p4, p5, p6 } = props;
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
          src={p5}
          sx={{
            width: { md: "40%", xs: "70%" },
          }}
        />
      </Box>
      <Box
        sx={{
          gridArea: "pics",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          component="img"
          src={p1}
          sx={{
            width: { md: "14%", xs: "20%" },
            position: "center",
          }}
        />
        <Box
          component="img"
          src={p2}
          sx={{
            width: { md: "10%", xs: "20%" },
            position: "center",
          }}
        />
        <Box
          component="img"
          src={p3}
          sx={{
            width: { md: "10%", xs: "20%" },
            position: "center",
          }}
        />
        <Box
          component="img"
          src={p4}
          sx={{
            width: { md: "10%", xs: "20%" },
            position: "center",
          }}
        />
        <Box
          component="img"
          src={p6}
          sx={{
            width: { md: "25%", xs: "60%" },
            position: "center",
          }}
        />
      </Box>
    </Box>
  );
}
