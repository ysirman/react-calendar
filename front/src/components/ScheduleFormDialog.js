import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import ScheduleIcon from "@material-ui/icons/Schedule";
import PlaceIcon from "@material-ui/icons/Place";
import SubjectIcon from "@material-ui/icons/Subject";

import {
  CHANGE_SCHEDULE_FORM_STATUS,
  SET_SELECTED_DATE,
  CREATE_SCHEDULE,
  UPDATE_SCHEDULE,
  DELETE_SCHEDULE,
} from "../actions";

function ScheduleFormDialog() {
  const { state, dispatch } = useContext(AppContext);
  const params = state.scheduleForm.params;
  const unCreatable = params.title === "";

  function handleClose() {
    dispatch({
      type: CHANGE_SCHEDULE_FORM_STATUS,
      isOpen: false,
    });
  }
  function handleDateChange(date) {
    dispatch({ type: SET_SELECTED_DATE, selectedDate: date });
  }

  // スケジュール登録or更新（引数：変更箇所のパラメーター1つだけ）
  function handleClickSaveButton() {
    if (params.id === "") {
      dispatch({
        type: CREATE_SCHEDULE,
        title: params.title,
        date: state.calendar.selected.toLocaleDateString(),
        place: params.place,
        detail: params.detail,
      });
    } else {
      dispatch({
        type: UPDATE_SCHEDULE,
        id: params.id,
        title: params.title,
        date: state.calendar.selected.toLocaleDateString(),
        place: params.place,
        detail: params.detail,
      });
    }
    dispatch({
      type: CHANGE_SCHEDULE_FORM_STATUS,
      isOpen: false,
    });
  }

  // フォームのパラメーターを更新（引数：変更箇所のパラメーター1つだけ）
  function handleChangeFormParams(eParam) {
    const title = eParam.title === undefined ? params.title : eParam.title;
    const place = eParam.place === undefined ? params.place : eParam.place;
    const detail = eParam.detail === undefined ? params.detail : eParam.detail;
    dispatch({
      type: CHANGE_SCHEDULE_FORM_STATUS,
      isOpen: true,
      params: { id: params.id, title: title, place: place, detail: detail },
    });
  }

  // スケジュール削除
  function handleClickDeleteButton() {
    dispatch({
      type: DELETE_SCHEDULE,
      id: params.id,
    });
    dispatch({
      type: CHANGE_SCHEDULE_FORM_STATUS,
      isOpen: false,
    });
  }

  // 削除ボタンを表示（更新時のみ）
  function deleteIconButton() {
    if (params.id !== "") {
      return (
        <IconButton
          className="delete-button"
          aria-label="delete"
          onClick={handleClickDeleteButton}
        >
          <DeleteIcon />
        </IconButton>
      );
    }
  }

  return (
    <Dialog
      className="schedule-form"
      open={state.scheduleForm.isOpen}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      {deleteIconButton()}
      <IconButton
        className="close-button"
        aria-label="close"
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <TextField
          value={params.title}
          onChange={(e) => handleChangeFormParams({ title: e.target.value })}
          autoFocus
          margin="dense"
          id="name"
          label="タイトルを追加"
          type="text"
          fullWidth
        />
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item>
            <ScheduleIcon />
          </Grid>
          <Grid item>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                value={state.calendar.selected}
                onChange={handleDateChange}
                animateYearScrolling
                format="yyyy年M月d日"
                autoOk
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item>
            <PlaceIcon />
          </Grid>
          <Grid item>
            <TextField
              label="場所を追加"
              value={params.place}
              onChange={(e) =>
                handleChangeFormParams({ place: e.target.value })
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item>
            <SubjectIcon />
          </Grid>
          <Grid item>
            <TextField
              label="説明を追加"
              value={params.detail}
              onChange={(e) =>
                handleChangeFormParams({ detail: e.target.value })
              }
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={unCreatable}
          onClick={handleClickSaveButton}
          color="primary"
        >
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ScheduleFormDialog;
