import { Guid } from "guid-typescript";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../Hooks/useActions";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { IChangeTrackerUniversity } from "../../../Redux/Reducers/UniversityReducer/types";
import { StudentRow } from "../../Commons/StudentRow";

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
    <div className="w-screen overflow-y-hidden py-5 px-10 flex flex-col justify-center gap-10">
      <h1 className="text-3xl font-bold text-blue-500 text-center">
        University Students Checker
      </h1>
      <div className="grid grid-rows-auto grid-cols-1 px-80 gap-2">
        {universityStudents?.map((item) => {
          return (
            <StudentRow
              key={Guid.create().toString()}
              name={item.studentDto.name}
              groupname={item.studentDto.timePass}
              checker={item.visit}
              onCheck={async () => {
                await onChange(item.studentDto.email, !item.visit);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
