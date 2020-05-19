import {
  GET_MEETUPS_START,
  GET_MEETUPS_SUCCESS,
  GET_MEETUPS_ERROR,
  CREATE_MEETUPS_START,
  CREATE_MEETUPS_SUCCESS,
  CREATE_MEETUPS_ERROR
} from "../types";

const initialState = {
  data: [],
  dataLocal: [],
  loading: false,
  message: ""
};

const meetupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEETUPS_START: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_MEETUPS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.meetups.concat(state.dataLocal)
      };
    }
    case GET_MEETUPS_ERROR: {
      return {
        ...state,
        loading: false,
        message: action.payload.message
      };
    }
    case CREATE_MEETUPS_START: {
      return {
        ...state,
        loading: true
      };
    }
    case CREATE_MEETUPS_SUCCESS: {
      return {
        ...state,
        loading: false,
        dataLocal: state.dataLocal.concat(action.payload.values),
        message: ""
      };
    }
    case CREATE_MEETUPS_ERROR: {
      return {
        ...state,
        loading: false,
        message: action.payload.message
      };
    }
    default:
      return state;
  }
};

export default meetupsReducer;
