import {} from "../actions";

function schedule(state = [], action) {
  switch (action.type) {
    default:
      return [
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
        {
          id: 4,
          date: "2020/7/17",
          title: "sample-title4",
          place: "Tokyo4",
          detail: "detail-hoge4",
        },
      ];
  }
}

export default schedule;
