import { stat } from "fs";
import { Guid } from "guid-typescript";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../../Hooks/useActions";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { ILessonTrackerChangeForm } from "../../../Redux/Reducers/LessonReducer/types";
import { LinkButton } from "../../Commons/Buttons/LinkButton";
import { StudentRow } from "../../Commons/StudentRow";
import { useNavigate } from "react-router-dom";

export const LessonDetails: React.FC = () => {
  const { title, id } = useParams();
  const nav = useNavigate();

  const { getStudentLesson, changeLessonTracker } = useActions();
  const entities = useTypedSelector((state) => state.lessonReducer.entity);

  useEffect(() => {
    getStudentLesson(id !== undefined ? id : "none");
  }, []);

  const changeTracker = async (id: string, email: string, visit: boolean) => {
    try {
      var request: ILessonTrackerChangeForm = {
        id: id,
        email: email,
        lessonVisit: visit,
      };
      await changeLessonTracker(request);
    } catch (error) {}
  };

  return (
    <div className="w-screen overflow-y-hidden py-5 px-10 flex flex-col justify-center gap-10">
      <h1 className="text-3xl font-bold text-blue-500 text-center">{title}</h1>
      <div className="grid grid-rows-auto grid-cols-1 px-80 gap-2">
        {entities?.map((entity) => {
          return (
            <StudentRow
              key={Guid.create().toString()}
              name={entity.studentLessonDto.studentDto.name + " " + entity.studentLessonDto.studentDto.surname}
              groupname={entity.groupDto.name}
              checker={entity.studentLessonDto.lessonVisit}
              onCheck={async () => {
                await changeTracker(
                  entity.studentLessonDto.id,
                  entity.studentLessonDto.studentDto.email,
                  !entity.studentLessonDto.lessonVisit
                );
                window.location.reload();
              }}
            />
          );
        })}
        
      </div>

    </div>
  );
};
