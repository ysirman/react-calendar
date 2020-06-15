import React, { useReducer } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navigation from "./Navigation";
import CalendarBoard from "./CalendarBoard";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";

function App() {
  const initialState = {
    calendar: { selected: new Date() },
    schedule: [
      {
        id: 1,
        date: "2020/6/14",
        title: "sample-title1",
        place: "Tokyo",
        detail: "detail-hoge",
      },
      {
        id: 2,
        date: "2020/6/15",
        title: "sample-title2sample-title2sample-title2sample-title2",
        place: "Tokyo2",
        detail: "detail-hoge2",
      },
      {
        id: 3,
        date: "2020/6/15",
        title: "sample-title3",
        place: "Tokyo3",
        detail: "detail-hoge3",
      },
    ],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <CssBaseline />
      <Navigation />
      <CalendarBoard />
    </AppContext.Provider>
  );
}

export default App;
