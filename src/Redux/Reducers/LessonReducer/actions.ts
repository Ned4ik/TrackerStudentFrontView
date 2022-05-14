import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import http from "../../../axios_creator";
import {
  ILessonResponse,
  ILessonTrackerChangeForm,
  LessonAction,
  LessonActionTypes,
} from "./types";

export const getStudentLesson = (id: string) => {
  return async (dispatch: Dispatch<LessonAction>) => {
    try {
      dispatch({
        type: LessonActionTypes.INITLESSON_WAITING,
        payload: true,
      });
      const response = await http.get<Array<ILessonResponse>>(
        "api/Lesson/GetStudentLessons?Id=" + id
      );
      dispatch({
        type: LessonActionTypes.INITLESSON,
        payload: response.data,
      });

      return Promise.resolve();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<any>;
        dispatch({
          type: LessonActionTypes.INITLESSON_ERROR,
          payload: serverError.response?.data,
        });
        if (serverError && serverError.response) {
          return Promise.reject(serverError.response.data);
        }
      }
    }
  };
};

export const changeLessonTracker = (data: ILessonTrackerChangeForm) => {
  return async (dispatch: Dispatch<LessonAction>) => {
    try {
      dispatch({
        type: LessonActionTypes.INITLESSON_WAITING,
        payload: true,
      });
      const response = await http.post<string>(
        "api/Lesson/LessonsTrackerChange",
        data
      );

      return Promise.resolve();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<any>;
        dispatch({
          type: LessonActionTypes.INITLESSON_ERROR,
          payload: serverError.response?.data,
        });
        if (serverError && serverError.response) {
          return Promise.reject(serverError.response.data);
        }
      }
    }
  };
};
