import React from "react";
import pages from "./NavbarLinks";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Button,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { ImLinkedin, ImMobile } from "react-icons/im";

export default function Header({ toggleDrawer }) {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: { xs: "transparent", sm: "primary.main" },
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              color: { xs: "primary.main", sm: "white" },
              fontSize: 25,
              mt: 1,
            }}
            component="a"
            href="https://www.linkedin.com/in/gouthamananda/"
          >
            <ImLinkedin />
          </Box>
          <Box
            sx={{
              color: { xs: "primary.main", sm: "white" },
              fontSize: 25,
              mt: 1,
              mx: 1,
            }}
            component="a"
            href="tel:+15149231564"
          >
            <ImMobile />
          </Box>
          <Box
            sx={{
              flex: 1,
            }}
          />
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            {pages.map((page) => {
              return (
                <Button
                  key={page.path}
                  variant="text"
                  sx={{ color: "white" }}
                  onClick={() => {
                    navigate(page.path);
                  }}
                >
                  {page.text}
                </Button>
              );
            })}
          </Box>

          <IconButton
            size="medium"
            sx={{
              display: { xs: "block", sm: "none" },
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
