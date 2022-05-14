import { ILessonState, LessonAction, LessonActionTypes } from "./types";

const inialState: ILessonState = {
  entity: null,
  loading: false,
  error: "",
};

export const lessonReducer = (
  state = inialState,
  action: LessonAction
): ILessonState => {
  switch (action.type) {
    case LessonActionTypes.INITLESSON: {
      return {
        ...state,
        entity: action.payload,
        loading: false,
        error: "",
      };
    }
    case LessonActionTypes.INITLESSON_WAITING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case LessonActionTypes.INITLESSON_ERROR: {
      return {
        ...state,
        error:
          action.payload === undefined || action.payload === null
            ? "Server error"
            : action.payload,
        loading: false,
      };
    }
    case LessonActionTypes.INITLESSON_CLEAR: {
      return {
        ...state,
        entity: null,
        loading: false,
        error: "",
      };
    }
    default:
      return state;
  }
};
