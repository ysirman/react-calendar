import React, { useContext } from "react";
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
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import calendar_icon from "./calendar_icon.png";

import {
  SET_TODAY,
  SET_LAST_MONTH,
  SET_NEXT_MONTH,
  SET_SELECTED_DATE,
} from "../actions";

function Navigation() {
  const { state, dispatch } = useContext(AppContext);

  function handleTodayClick() {
    dispatch({ type: SET_TODAY });
  }
  function handleBackClick() {
    dispatch({ type: SET_LAST_MONTH });
  }
  function handleForwardClick() {
    dispatch({ type: SET_NEXT_MONTH });
  }
  function handleDateChange(date) {
    dispatch({ type: SET_SELECTED_DATE, selectedDate: date });
  }

  return (
    <>
      <AppBar position="static" id="navigation">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Box mr={1}>
            <img alt="calendar_icon" src={calendar_icon} width="50px" />
          </Box>
          <Typography variant="h6">カレンダー</Typography>
          <Button color="inherit" onClick={handleTodayClick}>
            今日
          </Button>
          <Box>
            <IconButton edge="start" color="inherit" onClick={handleBackClick}>
              <ArrowBackIosRoundedIcon />
            </IconButton>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleForwardClick}
            >
              <ArrowForwardIosRoundedIcon />
            </IconButton>
          </Box>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              value={state.calendar.selected}
              onChange={handleDateChange}
              animateYearScrolling
              format="yyyy年M月"
              autoOk
              InputProps={{
                disableUnderline: true,
              }}
            />
          </MuiPickersUtilsProvider>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navigation;
