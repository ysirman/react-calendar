import { combineReducers } from "redux";

import calendar from "./calendar";
import schedule from "./schedule";

export default combineReducers({
  calendar,
  schedule,
});
