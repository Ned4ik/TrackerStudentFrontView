import { Guid } from "guid-typescript";
import moment from "moment";
import React from "react";
import { LessonsItem } from "../LessonsItem";
import { ILessonsItem } from "../LessonsItem/types";
import { IScheduleItem } from "./types";
import 'moment/locale/ru';

export const ScheduleItem: React.FC<IScheduleItem> = ({ day, children }) => {
  var lang = moment.locale();
  return (
    <div>
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-small text-blue-600">{moment(day).format("dddd Do").toUpperCase()}</p>
        <hr />
      </div>
      <div className="grid grid-cols-6 gap-4 py-4">{children}</div>
    </div>
  );
};
