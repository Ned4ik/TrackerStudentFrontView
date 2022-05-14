import { IGroup } from "../LessonReducer/types";
import { ILesson } from "../ScheduleReducer/types";

export enum SearchActionTypes {
  INITSEARCHGROUP = "INITSEARCHGROUP",
  INITSEARCHCOURSES = "INITINITSEARCHCOURSESSEARCH",
  INITSEARCHLESSONS = "INITSEARCHLESSONS",
  INITSEARCH_WAITING = "INITSEARCH_WAITING",
  INITSEARCH_ERROR = "INITSEARCH_ERROR",
  INITSEARCH_CLEAR = "INITSEARCH_CLEAR",
}

export interface ICourse {
  id: string;
  name: string;
}

export interface ISearchState {
  groups: Array<IGroup> | null;
  courses: Array<ICourse> | null;
  lessons: Array<ILesson> | null;
  loading: boolean;
  error: string;
}

export interface InitSearchGroupAction {
  type: SearchActionTypes.INITSEARCHGROUP;
  payload: Array<IGroup> | null;
}
export interface InitSearchCourseAction {
  type: SearchActionTypes.INITSEARCHCOURSES;
  payload: Array<ICourse> | null;
}
export interface InitSearchLessonsAction {
  type: SearchActionTypes.INITSEARCHLESSONS;
  payload: Array<ILesson> | null;
}
export interface InitSearchWaitAction {
  type: SearchActionTypes.INITSEARCH_WAITING;
  payload: boolean;
}
export interface InitSearchErrorAction {
  type: SearchActionTypes.INITSEARCH_ERROR;
  payload: string;
}
export interface InitSearchlearAction {
  type: SearchActionTypes.INITSEARCH_CLEAR;
}

export type SearchAction =
  | InitSearchGroupAction
  | InitSearchCourseAction
  | InitSearchWaitAction
  | InitSearchErrorAction
  | InitSearchlearAction
  | InitSearchLessonsAction;
