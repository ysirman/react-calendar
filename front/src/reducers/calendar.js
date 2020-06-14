import {
  SET_TODAY,
  SET_LAST_MONTH,
  SET_NEXT_MONTH,
  SET_SELECTED_DATE,
} from "../actions";

function calendar(state = [], action) {
  switch (action.type) {
    case SET_TODAY:
      return { selected: new Date() };
    case SET_LAST_MONTH:
      state.selected.setMonth(state.selected.getMonth() - 1);
      return { selected: state.selected };
    case SET_NEXT_MONTH:
      state.selected.setMonth(state.selected.getMonth() + 1);
      return { selected: state.selected };
    case SET_SELECTED_DATE:
      return { selected: action.selectedDate };
    default:
      return state;
  }
}

export default calendar;
