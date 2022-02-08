import React from "react";
import I1 from "./I1";
import v3 from "../../Assets/v3.gif";
import p101 from "../../Assets/p101.png";
import { Box } from "@mui/material";

export default function Abaqus() {
  return (
    <Box sx={{ background: "white" }}>
      <I1 t="Crash Box Dynamic Explicit Simulation " v={v3} p={p101} />
    </Box>
  );
}
