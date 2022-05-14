import { ISearchState, SearchAction, SearchActionTypes } from "./types";

const inialState: ISearchState = {
  groups: null,
  courses: null,
  loading: false,
  error: "",
  lessons: null,
};

export const searchReducer = (
  state = inialState,
  action: SearchAction
): ISearchState => {
  switch (action.type) {
    case SearchActionTypes.INITSEARCHGROUP: {
      return {
        ...state,
        groups: action.payload,
        loading: false,
        error: "",
      };
    }
    case SearchActionTypes.INITSEARCHCOURSES: {
      return {
        ...state,
        courses: action.payload,
        loading: false,
        error: "",
      };
    }
    case SearchActionTypes.INITSEARCHLESSONS: {
      return {
        ...state,
        lessons: action.payload,
        loading: false,
        error: "",
      };
    }
    case SearchActionTypes.INITSEARCH_WAITING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case SearchActionTypes.INITSEARCH_ERROR: {
      return {
        ...state,
        error:
          action.payload === undefined || action.payload === null
            ? "Server error"
            : action.payload,
        loading: false,
      };
    }
    case SearchActionTypes.INITSEARCH_CLEAR: {
      return {
        ...state,
        groups: null,
        courses: null,
        loading: false,
        error: "",
      };
    }
    default:
      return state;
  }
};
