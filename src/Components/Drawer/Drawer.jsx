import React from "react";
import menuItems from "../Header/NavbarLinks";
import {
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export default function Drawer({ open, toggleDrawer, setDrawerOpen }) {
  const navigate = useNavigate();
  return (
    <SwipeableDrawer
      PaperProps={{
        sx: {
          width: { xs: "12rem", md: "15rem" },
        },
      }}
      anchor="right"
      open={open}
      onOpen={toggleDrawer(false)}
      onClose={toggleDrawer(true)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: { sm: "100%" },
        }}
      >
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => {
          return (
            <ListItem
              key={item.path}
              color="primary"
              button
              onClick={() => {
                navigate(item.path);
                setDrawerOpen(false);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  color: "text.primary",
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </SwipeableDrawer>
  );
}
