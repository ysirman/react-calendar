import React, { useContext } from "react";
import Box from "@material-ui/core/Box";
import AppContext from "../contexts/AppContext";
import Schedule from "./Schedule";

import { SET_SELECTED_DATE, CHANGE_SCHEDULE_FORM_STATUS } from "../actions";

function CalendarElement({ date, calendarLines }) {
  const ONE_WEEK_DAYS = 7;

  const { state, dispatch } = useContext(AppContext);

  // 日付（時間を除く）を比較して今日のスタイルを変える
  const today = new Date().toLocaleDateString(); // 2020/06/15
  let classOfDate = date.toLocaleDateString() === today ? "today" : "";

  const schedules = state.schedule.filter(
    (schedule) => schedule.date === date.toLocaleDateString()
  );

  function handleClickDialogOpen() {
    dispatch({
      type: SET_SELECTED_DATE,
      selectedDate: date,
    });
    dispatch({
      type: CHANGE_SCHEDULE_FORM_STATUS,
      isOpen: true,
    });
  }
  return (
    <>
      <Box
        className="calendar-item"
        width={1 / ONE_WEEK_DAYS}
        height={1 / calendarLines}
        py={0.5}
        onClick={handleClickDialogOpen}
      >
        <Box align="center">
          <span className={classOfDate}>{date.getDate()}</span>
        </Box>
        <Box className="schedule-list" height="calc(100% - 24px)">
          {schedules.map((schedule, index) => (
            <Schedule key={index} schedule={schedule} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default CalendarElement;
