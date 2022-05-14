import { IStudent } from "../AccountReducer/types";
import { ILesson } from "../ScheduleReducer/types";

export enum LessonActionTypes {
  INITLESSON = "INITLESSON",
  INITLESSON_CHANGE_TRACKER = "INITLESSON_CHANGE_TRACKER",
  INITLESSON_WAITING = "INITLESSON_WAITING",
  INITLESSON_ERROR = "INITLESSON_ERROR",
  INITLESSON_CLEAR = "INITLESSON_CLEAR",
}

export interface IGroup {
  id: string;
  name: string;
}

export interface IStudentLesson {
  id: string;
  studentDto: IStudent;
  lessonDto: ILesson;
  lessonVisit: boolean;
  dateLose: Date | null;
}

export interface ILessonResponse {
  studentLessonDto: IStudentLesson;
  groupDto: IGroup;
}

export interface ILessonState {
  entity: Array<ILessonResponse> | null;
  loading: boolean;
  error: string;
}

export interface ILessonTrackerChangeForm {
  id: string;
  email: string;
  lessonVisit: boolean;
}

export interface InitLessonAction {
  type: LessonActionTypes.INITLESSON;
  payload: Array<ILessonResponse> | null;
}
export interface InitLessonWaitAction {
  type: LessonActionTypes.INITLESSON_WAITING;
  payload: boolean;
}
export interface InitLessonErrorAction {
  type: LessonActionTypes.INITLESSON_ERROR;
  payload: string;
}
export interface InitLessonlearAction {
  type: LessonActionTypes.INITLESSON_CLEAR;
}

export type LessonAction =
  | InitLessonAction
  | InitLessonWaitAction
  | InitLessonErrorAction
  | InitLessonlearAction;
