import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import http from "../../../axios_creator";
import { IStudent } from "../AccountReducer/types";
import {
  IChangeTrackerUniversity,
  IUniversityStudent,
  UniversityAction,
  UniversityActionTypes,
} from "./types";

export const getUniversityAll = () => {
  return async (dispatch: Dispatch<UniversityAction>) => {
    try {
      dispatch({
        type: UniversityActionTypes.INITUNIVERSITY_WAITING,
        payload: true,
      });
      const response = await http.get<Array<IUniversityStudent>>(
        "api/University/GetAll"
      );
      dispatch({
        type: UniversityActionTypes.INITUNIVERSITY,
        payload: response.data,
      });

      return Promise.resolve();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<any>;
        dispatch({
          type: UniversityActionTypes.INITUNIVERSITY_ERROR,
          payload: serverError.response?.data,
        });
        if (serverError && serverError.response) {
          return Promise.reject(serverError.response.data);
        }
      }
    }
  };
};

export const universityChangeTracker = (data: IChangeTrackerUniversity) => {
  return async (dispatch: Dispatch<UniversityAction>) => {
    try {
      dispatch({
        type: UniversityActionTypes.INITUNIVERSITY_WAITING,
        payload: true,
      });
      const response = await http.post<IStudent>(
        "api/University/StudentTracker",
        data
      );

      return Promise.resolve();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<any>;
        dispatch({
          type: UniversityActionTypes.INITUNIVERSITY_ERROR,
          payload: serverError.response?.data,
        });
        if (serverError && serverError.response) {
          return Promise.reject(serverError.response.data);
        }
      }
    }
  };
};
