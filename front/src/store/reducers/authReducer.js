import {
  DO_LOGIN_START,
  DO_LOGIN_SUCCESS,
  DO_LOGIN_ERROR,
  DO_LOGOUT
} from "../types";

const initialState = {
  data: {},
  loading: false,
  message: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case DO_LOGIN_START: {
      return {
        ...state,
        loading: true
      };
    }
    case DO_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.user,
        message: ""
      };
    }
    case DO_LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        message: action.payload.message
      };
    }
    case DO_LOGOUT: {
      return {
        ...state,
        data: {},
        loading: false,
        message: ""
      };
    }
    default:
      return state;
  }
};

export default authReducer;
