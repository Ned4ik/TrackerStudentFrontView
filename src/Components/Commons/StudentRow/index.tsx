import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LinkButton } from "../Buttons/LinkButton";
export interface IStudentRow {
  name: string;
  groupname: any;
  checker: boolean;
  onCheck: () => void;
}

export const StudentRow: React.FC<IStudentRow> = ({
  name,
  groupname,
  checker,
  onCheck,
}) => {
  const [isCheck, setCheck] = useState(checker);
  const nav = useNavigate();
  useEffect(() => {
    setCheck(checker);
  }, [checker]);

  return (
    <div
      className={`w-full grid grid-cols-7 justify-between gap-20 py-4 px-8 rounded-md shadow-md ${

        isCheck? "bg-lime-500 text-black" : "bg-red-500 text-white"

      } ${groupname >= 160 ? "bg-yellow-300" : null}`}
    >
      <h1 className="font-medium text-xl col-span-2">{name}</h1>
      <h1 className="font-medium text-xl col-span-2">{groupname}</h1>
      <h1 className={`font-medium text-xl col-span-2`}>
      {
          groupname >= 160 ? "In Excluded" : isCheck ? "Visited" : "Dont Visited"
      }
      </h1>
      <div className="flex justify-center items-center">
        <input
          defaultChecked={isCheck}
          type={"checkbox"}
          className="outline-0 border-0 bg-success"
          onChange={() => {
            onCheck();
            setCheck(!isCheck);
          }}
        />

      </div>
     
    </div>
  );
};
