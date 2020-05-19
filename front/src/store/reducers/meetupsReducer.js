import {
  GET_MEETUPS_START,
  GET_MEETUPS_SUCCESS,
  GET_MEETUPS_ERROR,
  CREATE_MEETUPS_START,
  CREATE_MEETUPS_SUCCESS,
  CREATE_MEETUPS_ERROR,
  SUSCRIBE_MEETUP_START
} from "../types";

const initialState = {
  data: [],
  firstData: false,
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
        firstData: true,
        data: action.payload.meetups.concat(state.data)
      };
    }
    case GET_MEETUPS_ERROR: {
      return {
        ...state,
        loading: false,
        firstData: false,
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
        data: state.data.concat(action.payload.values),
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
    case SUSCRIBE_MEETUP_START: {
      const newData = state.data.filter(i => i.id !== action.payload.meetup.id);
      return {
        ...state,
        data: newData.concat(action.payload.meetup)
      };
    }
    default:
      return state;
  }
};

export default meetupsReducer;
