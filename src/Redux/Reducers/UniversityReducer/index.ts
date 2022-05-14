import {
  IUniversityState,
  UniversityAction,
  UniversityActionTypes,
} from "./types";

const inialState: IUniversityState = {
  entity: null,
  loading: false,
  error: "",
};

export const universityReducer = (
  state = inialState,
  action: UniversityAction
): IUniversityState => {
  switch (action.type) {
    case UniversityActionTypes.INITUNIVERSITY: {
      return {
        ...state,
        entity: action.payload,
        loading: false,
        error: "",
      };
    }
    case UniversityActionTypes.INITUNIVERSITY_WAITING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case UniversityActionTypes.INITUNIVERSITY_ERROR: {
      return {
        ...state,
        error:
          action.payload === undefined || action.payload === null
            ? "Server error"
            : action.payload,
        loading: false,
      };
    }
    case UniversityActionTypes.INITUNIVERSITY_CLEAR: {
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
