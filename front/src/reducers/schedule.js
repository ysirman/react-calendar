import { CREATE_SCHEDULE, UPDATE_SCHEDULE } from "../actions";

function schedule(state = [], action) {
  switch (action.type) {
    case CREATE_SCHEDULE:
      const schedule = {
        title: action.title,
        date: action.date,
        place: action.place,
        detail: action.detail,
      };
      const length = state.length;
      const id =
        length === 0
          ? 1
          : Math.max.apply(
              null,
              state.map((event) => {
                return event.id;
              })
            ) + 1;
      return [...state, { id, ...schedule }];
    case UPDATE_SCHEDULE:
      const schedules = state.filter((schedule) => schedule.id !== action.id);
      return [
        ...schedules,
        {
          id: action.id,
          title: action.title,
          date: action.date,
          place: action.place,
          detail: action.detail,
        },
      ];
    default:
      return state;
  }
}

export default schedule;
