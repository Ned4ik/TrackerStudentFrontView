import moment from "moment";
import React from "react";
import { ILessonsItemStudent } from "./types";

export const LessonItemStudent: React.FC<ILessonsItemStudent> = ({
  name,
  time,
  IsCheck,
  onClick,
}) => {
    return (
        <div
          className={`px-5 py-10 border flex flex-col justify-center items-center gap-2 cursor-pointer transition-all text-blue-600 rounded-lg
         
           ${IsCheck ? "bg-green-500 text-black opacity-25": "bg-red-500 text-white hover:bg-blue-600 hover:text-white hover:scale-105 hover:border-blue-600"}
          `}
          onClick={() => {if (IsCheck) {
              
          } else {
              onClick()
          }}}
        >
          <h1 className="font-medium text-center text-1xl">{name}</h1>
          <h1 className="font-medium text-1xl">{moment(time).format("LT")}</h1>
        </div>
      );
};
