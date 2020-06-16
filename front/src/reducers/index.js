import { combineReducers } from "redux";

import calendar from "./calendar";
import schedule from "./schedule";
import scheduleForm from "./scheduleForm";

export default combineReducers({
  calendar,
  schedule,
  scheduleForm,
});
