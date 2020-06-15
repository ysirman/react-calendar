import React from "react";
import Box from "@material-ui/core/Box";

function Schedule({ schedule }) {
  return (
    <>
      <Box className="schedule-item">{schedule.title}</Box>
    </>
  );
}

export default Schedule;
