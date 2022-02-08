import React from "react";
import { Box } from "@mui/material";

import p21 from "../../Assets/p21.jpg";
import p22 from "../../Assets/p22.jpg";
import p31 from "../../Assets/p31.png";
import p32 from "../../Assets/p32.png";
import p33 from "../../Assets/p33.jpg";
import p34 from "../../Assets/p34.jpg";
import p35 from "../../Assets/p35.png";
import p41 from "../../Assets/p41.png";
import p42 from "../../Assets/p42.png";
import p51 from "../../Assets/p51.png";
import p52 from "../../Assets/p52.png";
import p53 from "../../Assets/p53.jpg";
import p54 from "../../Assets/p54.jpg";
import p55 from "../../Assets/p55.jpg";
import v1 from "../../Assets/v1.gif";
import v2 from "../../Assets/v2.gif";
import I1 from "./I1";
import I3 from "./I3";
import I2 from "./I2";
import I4 from "./I4";

function Msc() {
  return (
    <Box sx={{ background: "white" }}>
      <I4 t="Meshing" p1={p31} p2={p32} p3={p33} p4={p34} p5={p35} p6={p22} />
      <I3 t="(TET10, TET4, HEX8) Tetmesh,(TET10, TET4, HEX8) Isomesh " v={v2} />
      <I2 t="RBE2 vs RBE3" p1={p41} p2={p42} />
      <I1
        t="Linear Static Analysis SOL101"
        p1={v1}
        p2={p21}
        p3={p51}
        p4={p52}
        p5={p55}
        p6={p54}
        p7={p53}
      />
    </Box>
  );
}

export default Msc;
