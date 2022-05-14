import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import { IScheduleLesson, ScheduleAction, ScheduleActionTypes } from "./types";

import http from "../../../axios_creator";
import { IStudentLesson } from "../LessonReducer/types";

export const getSchedule = () => {
  return async (dispatch: Dispatch<ScheduleAction>) => {
    try {
      dispatch({
        type: ScheduleActionTypes.INITSCHEDULE_WAITING,
        payload: true,
      });
      const response = await http.get<Array<IScheduleLesson>>(
        "api/Schedule/GetAll"
      );
      dispatch({
        type: ScheduleActionTypes.INITSCHEDULE,
        payload: response.data,
      });

      return Promise.resolve();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<any>;
        dispatch({
          type: ScheduleActionTypes.INITSCHEDULE_ERROR,
          payload: serverError.response?.data,
        });
        if (serverError && serverError.response) {
          return Promise.reject(serverError.response.data);
        }
      }
    }
  };
};

export const getStudentLessons = (email: string) => {
  return async (dispatch: Dispatch<ScheduleAction>) => {
    try {
      dispatch({
        type: ScheduleActionTypes.INITSCHEDULE_WAITING,
        payload: true,
      });
      const response = await http.get<Array<IStudentLesson>>(
        "api/Lesson/GetStudentLessonsAsync?email=" + email
      );
      dispatch({
        type: ScheduleActionTypes.INITSTUDENTLESSON,
        payload: response.data,
      });

      return Promise.resolve();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<any>;
        dispatch({
          type: ScheduleActionTypes.INITSCHEDULE_ERROR,
          payload: serverError.response?.data,
        });
        if (serverError && serverError.response) {
          return Promise.reject(serverError.response.data);
        }
      }
    }
  };
};
