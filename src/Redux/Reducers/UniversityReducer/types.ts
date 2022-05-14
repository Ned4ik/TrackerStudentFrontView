import { IStudent } from "../AccountReducer/types";

export enum UniversityActionTypes {
  INITUNIVERSITY = "INITUNIVERSITY",
  INITUNIVERSITY_CHANGE_TRACKER = "INITUNIVERSITY_CHANGE_TRACKER",
  INITUNIVERSITY_WAITING = "INITUNIVERSITY_WAITING",
  INITUNIVERSITY_ERROR = "INITUNIVERSITY_ERROR",
  INITUNIVERSITY_CLEAR = "INITUNIVERSITY_CLEAR",
}

export interface IUniversityStudent {
  id: string;
  visit: boolean;
  studentDto: IStudent;
}

export interface IChangeTrackerUniversity {
  email: string;
  visit: boolean;
}

export interface IUniversityState {
  entity: Array<IUniversityStudent> | null;
  loading: boolean;
  error: string;
}

export interface InitUniversityAction {
  type: UniversityActionTypes.INITUNIVERSITY;
  payload: Array<IUniversityStudent> | null;
}
export interface InitUniversityWaitAction {
  type: UniversityActionTypes.INITUNIVERSITY_WAITING;
  payload: boolean;
}
export interface InitUniversityErrorAction {
  type: UniversityActionTypes.INITUNIVERSITY_ERROR;
  payload: string;
}
export interface InitUniversitylearAction {
  type: UniversityActionTypes.INITUNIVERSITY_CLEAR;
}

export type UniversityAction =
  | InitUniversityAction
  | InitUniversityWaitAction
  | InitUniversityErrorAction
  | InitUniversitylearAction;
