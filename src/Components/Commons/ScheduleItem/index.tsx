import { Guid } from "guid-typescript";
import moment from "moment";
import React from "react";
import { LessonsItem } from "../LessonsItem";
import { ILessonsItem } from "../LessonsItem/types";
import { IScheduleItem } from "./types";

export const ScheduleItem: React.FC<IScheduleItem> = ({ day, children }) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium">{moment(day).format("lll")}</h1>
        <hr />
      </div>
      <div className="grid grid-cols-6 gap-4 py-4">{children}</div>
    </div>
  );
};
