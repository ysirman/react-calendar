import React, { useContext } from "react";
import Box from "@material-ui/core/Box";
import CalendarElement from "./CalendarElement";
import AppContext from "../contexts/AppContext";

function CalendarBoard() {
  const ONE_WEEK_DAYS = 7;
  const SATURDAY = 6;
  const DAYS_OF_WEEK = ["日", "月", "火", "水", "木", "金", "土"];

  const { state } = useContext(AppContext);
  const selectedDate = state.calendar.selected;

  // 曜日配列を作成
  let dayOfWeeks = [];
  for (let i = 0; i < ONE_WEEK_DAYS; i++) {
    dayOfWeeks.push(
      <Box
        className="calendar-item"
        key={i}
        width={1 / ONE_WEEK_DAYS}
        pt={0.5}
        align="center"
      >
        {DAYS_OF_WEEK[i]}
      </Box>
    );
  }

  const lastMonthLastDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    0
  );
  // カレンダーの最初の日付
  // 前月末曜日が土曜(6)かによって決定
  let calendarFirstDate =
    lastMonthLastDate.getDay() === SATURDAY
      ? new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
      : new Date(
          lastMonthLastDate.getFullYear(),
          lastMonthLastDate.getMonth(),
          lastMonthLastDate.getDate() - lastMonthLastDate.getDay()
        );

  const calendarLastDate = new Date(
    calendarFirstDate.getFullYear(),
    calendarFirstDate.getMonth(),
    calendarFirstDate.getDate() + ONE_WEEK_DAYS * 5
  );
  const currentMonthLastDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  );
  // カレンダー表示に必要な行数
  // 5行表示した後の日付が月末日かによって判定
  const calendarLines = currentMonthLastDate <= calendarLastDate ? 5 : 6;
  const calendarDays = calendarLines * ONE_WEEK_DAYS;

  // カレンダー配列を作成
  let calendarElements = [];
  for (let i = 0; i < calendarDays; i++) {
    let date = new Date(calendarFirstDate.getTime());
    calendarElements.push(
      <CalendarElement key={i} date={date} calendarLines={calendarLines} />
    );
    calendarFirstDate.setDate(calendarFirstDate.getDate() + 1);
  }

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      width="calc(100% - 16px)"
      height="calc(100vh - 100px)"
      p={1}
      m={1}
      fontSize={12}
      color="grey.800"
    >
      {dayOfWeeks}
      {calendarElements}
    </Box>
  );
}

export default CalendarBoard;
