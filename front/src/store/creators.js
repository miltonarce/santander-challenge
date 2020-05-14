import {
  GET_MEETUPS_START,
  GET_MEETUPS_SUCCESS,
  GET_MEETUPS_ERROR
} from "./types";

import Api from "../services/Services";

export const getMeetupsStart = () => ({
  type: GET_MEETUPS_START
});

export const getMeetupsSuccess = meetups => ({
  type: GET_MEETUPS_SUCCESS,
  payload: {
    meetups
  }
});

export const getMeetupsError = message => ({
  type: GET_MEETUPS_ERROR,
  payload: {
    message
  }
});

export const getMeetups = () => async dispatch => {
  dispatch(getMeetupsStart());
  try {
    const { data, status, statusText } = await Api.meetups.fetch();
    if (status === 200) {
      dispatch(getMeetupsSuccess(data));
    } else {
      dispatch(getMeetupsError(statusText));
    }
  } catch (error) {
    dispatch(getMeetupsError("Something went wrong, please try again."));
  }
};
