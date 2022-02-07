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
        backgroundColor: "transparent",
        height: "11vh",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{ color: "primary.main", fontSize: 25 }}
            component="a"
            href="https://www.linkedin.com/in/gouthamananda/"
          >
            <ImLinkedin />
          </Box>
          <Box
            sx={{ color: "primary.main", fontSize: 25, mx: 1 }}
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
                  variant="text"
                  color="primary"
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
