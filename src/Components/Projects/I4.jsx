import React from "react";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import p61 from "../../Assets/p61.png";
import p62 from "../../Assets/p62.png";
import p63 from "../../Assets/p63.png";

export default function I4() {
  return (
    <Box>
      <Typography
        align="center"
        variant="h3"
        sx={{
          textTransform: "uppercase",
          fontWeight: 600,
          fontSize: { xs: ".8rem", md: "2rem", lg: "2.5rem" },
        }}
      >
        4.Design-Build Test Stiffened panel
      </Typography>

      <Box
        sx={{
          display: "flex",
          my: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Box component="img" src={p61} sx={{ width: "95%" }} />
          <Box component="img" src={p62} sx={{ width: "95%" }} />
          <Box component="img" src={p63} sx={{ width: "95%" }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: 700 }}> OBJECTIVES :</Typography>
          <Typography align="justify" variant="body1">
            To design a stiffened panel with constrain dimensions 12 inches for
            the length, 9 inches for the height and a thickness of 0.032 inch.
            All stringers should be identical to enhance the load capacity. The
            material is 2024 aluminum for both stringers and the panel. The
            panel and the stringers are attached by 0.125-inch rivet diameter.
            And verify the result using FEA.
          </Typography>
          <Typography sx={{ fontWeight: 700 }}> TOOLS USED :</Typography>
          <Typography align="justify" variant="body1">
            SOLIDWORKS, ANSYS WORKBENCH, Excel VBA
          </Typography>
          <Typography sx={{ fontWeight: 700, my: 2 }}> OVERVIEW :</Typography>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="left">Compliance</TableCell>
                  <TableCell align="right">Compliance Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell align="left">
                    Panel should withstand an axial compression load of{" "}
                  </TableCell>
                  <TableCell align="left">Min 65000N- Max 85 000N</TableCell>
                  <TableCell align="right">68 263.26N</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    2
                  </TableCell>
                  <TableCell align="left">
                    Stringer shape will be limited to two shapes
                  </TableCell>
                  <TableCell align="left">L & C shape</TableCell>
                  <TableCell align="right">C</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    3
                  </TableCell>
                  <TableCell align="left">
                    The stinger length should be above
                  </TableCell>
                  <TableCell align="left">0.125 inch</TableCell>
                  <TableCell align="right">0.53 inch</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    4
                  </TableCell>
                  <TableCell align="left">
                    The stringer length should not exceed
                  </TableCell>
                  <TableCell align="left">1 inch</TableCell>
                  <TableCell align="right">Does not </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    5
                  </TableCell>
                  <TableCell align="left">
                    The stringer height should not exceed
                  </TableCell>
                  <TableCell align="left">2 inches</TableCell>
                  <TableCell align="right">0.52 inch</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    6
                  </TableCell>
                  <TableCell align="left">
                    The stringer thickness is the same as panel
                  </TableCell>
                  <TableCell align="left">0.032 inch</TableCell>
                  <TableCell align="right">0.032 inch</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    7
                  </TableCell>
                  <TableCell align="left">
                    The number of rivets for each stringer should not exceed
                  </TableCell>
                  <TableCell align="left">15</TableCell>
                  <TableCell align="right">11</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    8
                  </TableCell>
                  <TableCell align="left">
                    The stringer should not exceed
                  </TableCell>
                  <TableCell align="left">10</TableCell>
                  <TableCell align="right">4</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    9
                  </TableCell>
                  <TableCell align="left">
                    The total weight should not exceed
                  </TableCell>
                  <TableCell align="left">0.6 kg</TableCell>
                  <TableCell align="right">0.319 Kg</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    10
                  </TableCell>
                  <TableCell align="left">
                    The final design score should not be below
                  </TableCell>
                  <TableCell align="left">70%</TableCell>
                  <TableCell align="right">76% </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}
