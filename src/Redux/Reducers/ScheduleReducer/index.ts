import { IScheduleState, ScheduleAction, ScheduleActionTypes } from "./types";

const inialState: IScheduleState = {
  schedule: null,
  loading: false,
  error: "",
  studentLessons: null
};

export const scheduleReducer = (
  state = inialState,
  action: ScheduleAction
): IScheduleState => {
  switch (action.type) {
    case ScheduleActionTypes.INITSCHEDULE: {
      return {
        ...state,
        schedule: action.payload,
        loading: false,
        error: "",
      };
    }
    case ScheduleActionTypes.INITSTUDENTLESSON: {
      return {
        ...state,
        studentLessons: action.payload,
        loading: false,
        error: "",
      };
    }
    case ScheduleActionTypes.INITSCHEDULE_WAITING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case ScheduleActionTypes.INITSCHEDULE_ERROR: {
      return {
        ...state,
        error:
          action.payload === undefined || action.payload === null
            ? "Server error"
            : action.payload,
        loading: false,
      };
    }
    case ScheduleActionTypes.INITSCHEDULE_CLEAR: {
      return {
        ...state,
        schedule: null,
        loading: false,
        error: "",
      };
    }
    default:
      return state;
  }
};
