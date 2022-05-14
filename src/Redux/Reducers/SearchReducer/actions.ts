import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import http from "../../../axios_creator";
import { IGroup } from "../LessonReducer/types";
import { ILesson } from "../ScheduleReducer/types";
import { ICourse, SearchAction, SearchActionTypes } from "./types";

export const getCourses = () => {
  return async (dispatch: Dispatch<SearchAction>) => {
    try {
      dispatch({
        type: SearchActionTypes.INITSEARCH_WAITING,
        payload: true,
      });
      const response = await http.get<Array<ICourse>>(
        "api/Search/GetAllCourses"
      );
      dispatch({
        type: SearchActionTypes.INITSEARCHCOURSES,
        payload: response.data,
      });

      return Promise.resolve();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<any>;
        dispatch({
          type: SearchActionTypes.INITSEARCH_ERROR,
          payload: serverError.response?.data,
        });
        if (serverError && serverError.response) {
          return Promise.reject(serverError.response.data);
        }
      }
    }
  };
};

export const getGroups = () => {
  return async (dispatch: Dispatch<SearchAction>) => {
    try {
      dispatch({
        type: SearchActionTypes.INITSEARCH_WAITING,
        payload: true,
      });
      const response = await http.get<Array<IGroup>>("api/Search/GetAllGroups");
      dispatch({
        type: SearchActionTypes.INITSEARCHGROUP,
        payload: response.data,
      });

      return Promise.resolve();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<any>;
        dispatch({
          type: SearchActionTypes.INITSEARCH_ERROR,
          payload: serverError.response?.data,
        });
        if (serverError && serverError.response) {
          return Promise.reject(serverError.response.data);
        }
      }
    }
  };
};

export const getLessons = () => {
  return async (dispatch: Dispatch<SearchAction>) => {
    try {
      dispatch({
        type: SearchActionTypes.INITSEARCH_WAITING,
        payload: true,
      });
      const response = await http.get<Array<ILesson>>(
        "api/Search/GetAllLessons"
      );
      dispatch({
        type: SearchActionTypes.INITSEARCHLESSONS,
        payload: response.data,
      });

      return Promise.resolve();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<any>;
        dispatch({
          type: SearchActionTypes.INITSEARCH_ERROR,
          payload: serverError.response?.data,
        });
        if (serverError && serverError.response) {
          return Promise.reject(serverError.response.data);
        }
      }
    }
  };
};
