import React, { useReducer } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navigation from "./Navigation";
import CalendarBoard from "./CalendarBoard";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";
import ScheduleFormDialog from "./ScheduleFormDialog";

function App() {
  const initialState = {
    calendar: { selected: new Date() },
    schedule: [],
    scheduleForm: {
      isOpen: false,
      params: { id: "", title: "", place: "", detail: "" },
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <CssBaseline />
      <Navigation />
      <CalendarBoard />
      <ScheduleFormDialog />
    </AppContext.Provider>
  );
}

export default App;
