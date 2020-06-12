import React from "react";
import AppContext from "../contexts/AppContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import calendar_icon from "./calendar_icon.png";

function Navigation() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Box mr={1}>
            <img alt="calendar_icon" src={calendar_icon} width="50px" />
          </Box>
          <Typography variant="h6">カレンダー</Typography>
          <Button color="inherit">今日</Button>
          <Box>
            <IconButton edge="start" color="inherit">
              <ArrowBackIosRoundedIcon />
            </IconButton>
            <IconButton edge="start" color="inherit">
              <ArrowForwardIosRoundedIcon />
            </IconButton>
          </Box>
          <Typography variant="h6">2020年6月</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navigation;
