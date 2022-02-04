import React from "react";
import { Box, Typography } from "@mui/material";

export default function I3(props) {
  const { t, v } = props;
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateAreas: `"heading "
                              "video"
      `,
        gridTemplateColumns: "1fr ",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          gridArea: "heading",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: ".8rem", md: "2rem" },
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
          gridArea: "video",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={v}
          sx={{
            width: { md: "70%", xs: "90%" },
            position: "center",
          }}
        />
      </Box>
    </Box>
  );
}
