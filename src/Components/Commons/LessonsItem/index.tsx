import moment from "moment";
import React from "react";
import { ILessonsItem } from "./types";

export const LessonsItem: React.FC<ILessonsItem> = ({
  name,
  time,
  onClick,
}) => {
  return (
    <div
      className="px-5 py-10 border flex flex-col justify-center items-center gap-2 cursor-pointer transition-all text-blue-600 rounded-lg 
      hover:bg-blue-600 hover:text-white hover:scale-105 hover:border-blue-600"
      onClick={onClick}
    >
      <h1 className="font-medium text-center text-1xl">{name}</h1>
      <h1 className="font-medium text-1xl">{moment(time).format("LT")}</h1>
    </div>
  );
};
