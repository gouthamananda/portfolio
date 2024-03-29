import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import I4 from "./I4";
import I1 from "./I1";
import I2 from "./I2";
import I3 from "./I3";

const StyledMenuItem = styled(Box)(({ theme, isClicked }) => ({
  background: isClicked ? theme.palette.primary.main : "white",
  color: isClicked && "white",
  padding: ".5rem",
  cursor: "pointer",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  margin: "10px 0",
  width: "80%",
  fontSize: { xs: ".8rem", md: "2rem", lg: "2.5rem" },
}));

function LoadItem(props) {
  const { num } = props;
  switch (num) {
    case 1:
      return <I1 />;
    case 2:
      return <I2 />;
    case 3:
      return <I3 />;
    case 4:
      return <I4 />;
    default:
      return (
        <Typography align="center" variant="h4" sx={{ color: "red" }}>
          {" "}
          Please select any project
        </Typography>
      );
  }
}

export default function Projects() {
  const [item, setItem] = useState(0);

  return (
    <Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <StyledMenuItem
          sx={{ boxShadow: 1 }}
          onClick={() => {
            setItem(1);
          }}
          isClicked={item === 1}
        >
          <Typography>1.Conceptual Design of all Electric Aircraft</Typography>
        </StyledMenuItem>
        <StyledMenuItem
          sx={{ boxShadow: 1 }}
          onClick={() => {
            setItem(2);
          }}
          isClicked={item === 2}
        >
          <Typography>
            2.Simulation FEM d'impact d'oiseau sur une plaque en composite et
            corrélation avec des essais
          </Typography>
        </StyledMenuItem>
        <StyledMenuItem
          sx={{ boxShadow: 1 }}
          onClick={() => {
            setItem(3);
          }}
          isClicked={item === 3}
        >
          <Typography>
            3.Design and Development of UAV Wing model for Aeroelastic Analysis
          </Typography>
        </StyledMenuItem>
        <StyledMenuItem
          sx={{ boxShadow: 1 }}
          onClick={() => {
            setItem(4);
          }}
          isClicked={item === 4}
        >
          <Typography>4.Design-Build Test Stiffened panel</Typography>
        </StyledMenuItem>
      </Box>

      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          background: "white",
          height: "50rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "80%" }}>{<LoadItem num={item} />}</Box>
      </Container>
    </Box>
  );
}
