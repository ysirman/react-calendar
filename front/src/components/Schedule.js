import React, { useContext } from "react";
import Box from "@material-ui/core/Box";

import AppContext from "../contexts/AppContext";
import { SET_SELECTED_DATE, CHANGE_SCHEDULE_FORM_STATUS } from "../actions";

function Schedule({ schedule }) {
  const { dispatch } = useContext(AppContext);

  function handleClickDialogOpen(e) {
    e.stopPropagation();
    dispatch({
      type: SET_SELECTED_DATE,
      selectedDate: new Date(schedule.date),
    });
    dispatch({
      type: CHANGE_SCHEDULE_FORM_STATUS,
      isOpen: true,
      params: {
        id: schedule.id,
        title: schedule.title,
        place: schedule.place,
        detail: schedule.detail,
      },
    });
  }

  return (
    <>
      <Box className="schedule-item" onClick={handleClickDialogOpen}>
        {schedule.title}
      </Box>
    </>
  );
}

export default Schedule;
