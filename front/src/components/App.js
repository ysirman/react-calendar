import React, { useReducer } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navigation from "./Navigation";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";

function App() {
  const initialState = {
    calendar: { selected: new Date() },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <CssBaseline />
      <Navigation />
    </AppContext.Provider>
  );
}

export default App;
