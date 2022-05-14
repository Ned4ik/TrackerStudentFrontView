import { IStudentLesson } from "../LessonReducer/types";

export interface ISchedule {
  id: string;
  date: Date;
}

export interface ILesson {
  id: string;
  name: string;
  startTime: Date;
}

export interface IScheduleLesson {
  scheduleDto: ISchedule;
  lessonDtos: Array<ILesson> | null;
}

export enum ScheduleActionTypes {
  INITSCHEDULE = "INITSCHEDULE",
  INITSCHEDULE_WAITING = "INITSCHEDULE_WAITING",
  INITSCHEDULE_ERROR = "INITSCHEDULE_ERROR",
  INITSCHEDULE_CLEAR = "INITSCHEDULE_CLEAR",
  INITSTUDENTLESSON = "INITSTUDENTLESSON",
}

export interface IScheduleState {
  schedule: Array<IScheduleLesson> | null;
  studentLessons: Array<IStudentLesson> | null;
  loading: boolean;
  error: string;
}

export interface InitScheduleAction {
  type: ScheduleActionTypes.INITSCHEDULE;
  payload: Array<IScheduleLesson> | null;
}
export interface InitStudentLessonAction {
  type: ScheduleActionTypes.INITSTUDENTLESSON;
  payload: Array<IStudentLesson> | null;
}
export interface InitScheduleWaitAction {
  type: ScheduleActionTypes.INITSCHEDULE_WAITING;
  payload: boolean;
}
export interface InitScheduleErrorAction {
  type: ScheduleActionTypes.INITSCHEDULE_ERROR;
  payload: string;
}
export interface InitTeacherClearAction {
  type: ScheduleActionTypes.INITSCHEDULE_CLEAR;
}

export type ScheduleAction =
  | InitScheduleAction
  | InitScheduleWaitAction
  | InitScheduleErrorAction
  | InitTeacherClearAction
  | InitStudentLessonAction;
