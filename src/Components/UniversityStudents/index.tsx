import { Guid } from "guid-typescript";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../Hooks/useActions";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import { IChangeTrackerUniversity } from "../../Redux/Reducers/UniversityReducer/types";
import { UniversityHeader } from "../Commons/UniversityHeader";
import { UniversityStudentRow } from "../Commons/UniversityStudentRow";

export const UniversityStudents: React.FC = () => {
  const nav = useNavigate();
  const teacher = useTypedSelector((state) => state.userReducer.teacher);

  const { getUniversityAll, universityChangeTracker } = useActions();

  const universityStudents = useTypedSelector(
    (state) => state.universityReducer.entity
  );

  useEffect(() => {
    getUniversityAll();
  }, []);

  const onChange = async (email: string, visit: boolean) => {
    var request: IChangeTrackerUniversity = {
      email: email,
      visit: visit,
    };
    await universityChangeTracker(request);
    window.location.reload();
  };

  return (

    <><div className="w-screen overflow-y-hidden py-5 px-10 flex flex-col justify-center gap-10">
      <h1 className="text-3xl font-bold text-yellow-500 text-center">
        Терминал Университета Мисис
      </h1>
    </div>
    <div className="grid grid-rows-auto grid-cols-1 px-80 gap-2">
    <div className="w-full flex items-center gap-20 border-b border-b-black mb-2">
      <h1 className="font-medium text-md ml-20">ФИО</h1>
      <h1 className="font-medium text-md ml-40">Студенчиский Билет</h1>
      <h1 className={`font-medium text-md ml-12`}>Статус</h1>
      <h1 className="font-medium text-lg ml-20">Дата Изменения</h1>
      </div>
        {universityStudents?.map((item) => {
          return (
            <UniversityStudentRow
              key={Guid.create().toString()}
              name={item.studentDto.name}
              surname={item.studentDto.surname}
              studentCard={item.studentDto.studentCard}
              checker={item.visit}
              visitDate={item.visitDate}
              onCheck={async () => {
                await onChange(item.studentDto.email, !item.visit);
              } } 
              />
          );
        })}
    </div></>
  );
};
