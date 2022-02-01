import React from "react";
import { Paper } from "@mui/material";

import p1 from "../../Assets/p1.jpg";
import v1 from "../../Assets/v1.gif";
import Item from "./Item";

function Msc() {
  return (
    <Paper>
      <Item t="Linear Static Analysis of Support Bracket" p={p1} v={v1} />
      <Item t="Linear Static Analysis of Support Bracket" p={p1} v={v1} />
      <Item t="Linear Static Analysis of Support Bracket" p={p1} v={v1} />
    </Paper>
  );
}

export default Msc;
