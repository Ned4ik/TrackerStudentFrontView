import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import {
  IInitGet,
  ILoginForm,
  UserAction,
  UserActionTypes,
  IStudent,
  ITeacher,
  IAuthResponseStudent,
  IAuthResponseTeacher,
} from "./types";

import jwt_decode from "jwt-decode";

import http from "../../../axios_creator";

export const loginStudent = (data: ILoginForm) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.INITUSER_WAITING, payload: true });
      const response = await http.post<IAuthResponseStudent>(
        "api/Auth/LoginStudent",
        data
      );
      const { token, expiredIn, entity } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("expiredin", new Date(expiredIn).toUTCString());

      dispatch({ type: UserActionTypes.INITSTUDENT, payload: entity });

      return Promise.resolve();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<any>;
        dispatch({
          type: UserActionTypes.INITUSER_ERROR,
          payload: serverError.response?.data,
        });
        if (serverError && serverError.response) {
          return Promise.reject(serverError.response.data);
        }
      }
    }
  };
};

export const loginTeacher = (data: ILoginForm) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.INITUSER_WAITING, payload: true });
      const response = await http.post<IAuthResponseTeacher>(
        "api/Auth/LoginTeacher",
        data
      );
      const { token, expiredIn, entity } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("expiredin", new Date(expiredIn).toUTCString());

      dispatch({ type: UserActionTypes.INITTEACHER, payload: entity });

      return Promise.resolve();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<any>;
        dispatch({
          type: UserActionTypes.INITUSER_ERROR,
          payload: serverError.response?.data,
        });
        if (serverError && serverError.response) {
          return Promise.reject(serverError.response.data);
        }
      }
    }
  };
};

// Not checked
export const getStudent = (email: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.INITUSER_WAITING, payload: true });
      const response = await http.get<IStudent>(
        "api/Auth/GetStudent?email=" + email
      );
      dispatch({ type: UserActionTypes.INITSTUDENT, payload: response.data });

      return Promise.resolve();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<any>;
        dispatch({
          type: UserActionTypes.INITUSER_ERROR,
          payload: serverError.response?.data,
        });
        if (serverError && serverError.response) {
          return Promise.reject(serverError.response.data);
        }
      }
    }
  };
};

export const getTeacher = (email: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.INITUSER_WAITING, payload: true });
      const response = await http.get<ITeacher>(
        "api/Auth/GetTeacher?email=" + email
      );
      dispatch({ type: UserActionTypes.INITTEACHER, payload: response.data });

      return Promise.resolve();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<any>;
        dispatch({
          type: UserActionTypes.INITUSER_ERROR,
          payload: serverError.response?.data,
        });
        if (serverError && serverError.response) {
          return Promise.reject(serverError.response.data);
        }
      }
    }
  };
};

export const LogoutUser = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionTypes.INITSTUDENT_CLEAR, payload: true });
    dispatch({ type: UserActionTypes.INITTEACHER_CLEAR, payload: true });
    localStorage.removeItem("token");
    localStorage.removeItem("expiredin");
  };
};

export const InitStudent = async (
  token: string,
  dispatch: Dispatch<UserAction>
) => {
  const data = jwt_decode(token) as IInitGet;
  try {
    dispatch({ type: UserActionTypes.INITUSER_WAITING, payload: true });
    const response = await http.get<IStudent>(
      "api/Auth/GetStudent?email=" + data.email
    );
    dispatch({ type: UserActionTypes.INITSTUDENT, payload: response.data });

    return Promise.resolve();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<any>;
      dispatch({
        type: UserActionTypes.INITUSER_ERROR,
        payload: serverError.response?.data,
      });
      if (serverError && serverError.response) {
        return Promise.reject(serverError.response.data);
      }
    }
  }
};

export const InitTeacher = async (
  token: string,
  dispatch: Dispatch<UserAction>
) => {
  const data = jwt_decode(token) as IInitGet;
  try {
    dispatch({ type: UserActionTypes.INITUSER_WAITING, payload: true });
    const response = await http.get<ITeacher>(
      "api/Auth/GetTeacher?email=" + data.email
    );
    dispatch({ type: UserActionTypes.INITTEACHER, payload: response.data });

    return Promise.resolve();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<any>;
      dispatch({
        type: UserActionTypes.INITUSER_ERROR,
        payload: serverError.response?.data,
      });
      if (serverError && serverError.response) {
        return Promise.reject(serverError.response.data);
      }
    }
  }
};
