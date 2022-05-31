import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
export interface IUniversityStudentRow {
  name: string;
  surname: string;
  studentCard: any;
  checker: boolean;
  visitDate: Date;
  onCheck: () => void;
}

export const UniversityStudentRow: React.FC<IUniversityStudentRow> = ({
  name,
  studentCard,
  surname,
  checker,
  visitDate,
  onCheck,
}) => {
  const [isCheck, setCheck] = useState(checker);
  const nav = useNavigate();
  useEffect(() => {
    setCheck(checker);
  }, [checker]);

  return (
    <div
      className={`w-full grid grid-cols-11 justify-between gap-20 py-4 px-8 rounded-md shadow-md ${

        isCheck? "bg-lime-500 text-black" : "bg-red-500 text-white"

      }`}
    >
      <h1 className="font-medium text-md col-span-3">{surname + " " + name}</h1>
      <h1 className="font-medium text-md col-span-2">{studentCard}</h1>
      <h1 className={`font-medium text-md col-span-2`}>
      {
         isCheck ? "Присутствует" : "Отсутствует"
      }
      </h1>
      <h1 className="font-medium text-lg col-span-3">{moment(visitDate).format("LLL")}</h1>
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
