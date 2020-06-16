import { CHANGE_SCHEDULE_FORM_STATUS } from "../actions";

function scheduleForm(state = { isOpen: false }, action) {
  switch (action.type) {
    case CHANGE_SCHEDULE_FORM_STATUS:
      const params =
        action.params === undefined
          ? { id: "", title: "", date: "", place: "", detail: "" }
          : action.params;
      return { isOpen: action.isOpen, params: params };
    default:
      return state;
  }
}

export default scheduleForm;
