import { IUserState, UserAction, UserActionTypes } from "./types";

const inialState: IUserState = {
  student: null,
  teacher: null,
  loading: false,
  error: "",
  filter: null,
};

export const userReducer = (
  state = inialState,
  action: UserAction
): IUserState => {
  switch (action.type) {
    case UserActionTypes.INITSTUDENT: {
      return {
        ...state,
        student: action.payload,
        loading: false,
        error: "",
      };
    }
    case UserActionTypes.INITTEACHER: {
      return {
        ...state,
        teacher: action.payload,
        loading: false,
        error: "",
      };
    }
    case UserActionTypes.INITFILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case UserActionTypes.INITUSER_WAITING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case UserActionTypes.INITUSER_ERROR: {
      return {
        ...state,
        error:
          action.payload === undefined || action.payload === null
            ? "Server error"
            : action.payload,
        loading: false,
      };
    }

    case UserActionTypes.INITSTUDENT_CLEAR: {
      return {
        ...state,
        student: null,
        loading: false,
        error: "",
      };
    }
    case UserActionTypes.INITTEACHER_CLEAR: {
      return {
        ...state,
        teacher: null,
        loading: false,
        error: "",
      };
    }
    default:
      return state;
  }
};
