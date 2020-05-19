import {
  GET_MEETUPS_START,
  GET_MEETUPS_SUCCESS,
  GET_MEETUPS_ERROR,
  DO_LOGIN_START,
  DO_LOGIN_SUCCESS,
  DO_LOGIN_ERROR,
  CREATE_MEETUPS_START,
  CREATE_MEETUPS_SUCCESS,
  CREATE_MEETUPS_ERROR,
  SUSCRIBE_MEETUP_START
} from "./types";

import Api from "../services/Services";

// Create Meetups
export const createMeetupsStart = () => ({
  type: CREATE_MEETUPS_START
});

export const createMeetupsSuccess = values => ({
  type: CREATE_MEETUPS_SUCCESS,
  payload: {
    values
  }
});

export const createMeetupsError = message => ({
  type: CREATE_MEETUPS_ERROR,
  payload: {
    message
  }
});

export const createMeetup = (values, redirect) => async dispatch => {
  dispatch(createMeetupsStart());
  try {
    const data = await Api.meetups.create(values);
    if (data) {
      dispatch(createMeetupsSuccess(data));
      redirect("/");
    } else {
      dispatch(createMeetupsError("Something went wrong, please try again."));
    }
  } catch (error) {
    dispatch(createMeetupsError("Something went wrong, please try again."));
  }
};

// Get Meetups
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
    const data = await Api.meetups.fetch();
    if (data) {
      dispatch(getMeetupsSuccess(data));
    } else {
      dispatch(getMeetupsError("Something went wrong, please try again."));
    }
  } catch (error) {
    dispatch(getMeetupsError("Something went wrong, please try again."));
  }
};

// Do login
export const doLoginStart = () => ({
  type: DO_LOGIN_START
});

export const doLoginSuccess = user => ({
  type: DO_LOGIN_SUCCESS,
  payload: {
    user
  }
});

export const doLoginError = message => ({
  type: DO_LOGIN_ERROR,
  payload: {
    message
  }
});

export const doLogin = (user, redirect) => async dispatch => {
  dispatch(doLoginStart());
  try {
    const data = await Api.auth.login(user);
    if (data.logged) {
      dispatch(doLoginSuccess(data));
      redirect("/");
    } else {
      dispatch(doLoginError(data.message));
    }
  } catch (error) {
    dispatch(doLoginError("Something went wrong, please try again."));
  }
};

// SUSCRIBE MEETUPS

export const suscribeMeetupStart = meetup => ({
  type: SUSCRIBE_MEETUP_START,
  payload: { meetup }
});
