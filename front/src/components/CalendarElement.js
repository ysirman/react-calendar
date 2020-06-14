import React from "react";
import Box from "@material-ui/core/Box";

function CalendarElement({ date, calendarLines }) {
  const ONE_WEEK_DAYS = 7;

  // 日付（時間を除く）を比較して今日のスタイルを変える
  const today = new Date().toLocaleDateString(); // 2020/06/15
  let classOfDate = date.toLocaleDateString() === today ? "today" : "";

  return (
    <>
      <Box
        className="calendar-item"
        width={1 / ONE_WEEK_DAYS}
        height={1 / calendarLines}
        p={1}
        pt={0.5}
      >
        <Box align="center">
          <span className={classOfDate}>{date.getDate()}</span>
        </Box>
      </Box>
    </>
  );
}

export default CalendarElement;
