import { ReactChild, ReactChildren, ReactElement } from "react";
import { ILesson } from "../../../Redux/Reducers/ScheduleReducer/types";
import { ILessonsItem } from "../LessonsItem/types";

export interface IScheduleItem {
  day: any;
  children?: ReactElement;
}
