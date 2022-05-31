import { stat } from "fs";
import { Guid } from "guid-typescript";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StringMappingType } from "typescript";
import { useActions } from "../../../Hooks/useActions";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { LessonsItem } from "../../Commons/LessonsItem";
import { ScheduleItem } from "../../Commons/ScheduleItem";
import { LessonItemStudent } from "../../Commons/LessonItemStudent";


export const Schedule: React.FC = () => {
  const nav = useNavigate();
  const { getSchedule, getStudentLessons } = useActions();

  const schedules = useTypedSelector((state) => state.scheduleReducer.schedule);
  const teacher = useTypedSelector((state) => state.userReducer.teacher);

  const studentLessons = useTypedSelector((state) => state.scheduleReducer.studentLessons);
  const student = useTypedSelector((state) => state.userReducer.student);

  useEffect(() => {
    if(student !== null)
    {
      getStudentLessons(student.email);
      getSchedule();
    }else{
      getSchedule();
    }
  }, [student, teacher]);

 
  const goLesson = (name: string, id: string) => {
    if (teacher !== null) {
      nav(`lesson/${name}/${id}`);
    }
  };

  const goCheck = (id: string  | any, email:string | any) =>{
    nav(`studentcheck/${id}/${email}`)
  }

  
  return (
    <div className="w-screen overflow-y-hidden py-5 px-10 flex flex-col justify-center gap-10">
      <h1 className="text-3xl font-bold text-blue-500 text-center">Расписание</h1>

      <div className="grid grid-rows-auto grid-cols-1 px-80 gap-3 ">
 {schedules?.map((schedule) => {
          return (
            <ScheduleItem
              key={Guid.create().toString()}
              day={schedule.scheduleDto.date}
            >
              <> {teacher !== null 
              ? schedule.lessonDtos?.map((lesson) => {
                return (
                  <LessonsItem
                    key={Guid.create().toString()}
                    name={lesson.name}
                    time={lesson.startTime}
                    onClick={() => {
                      goLesson(lesson.name, lesson.id);
                    }}
                  />
                );
              }):schedule.lessonDtos?.map((Lesson) => {
                return (
                  <LessonItemStudent
                    key={Guid.create().toString()}
                    name={Lesson.name}
                    time={Lesson.startTime}
                    IsCheck = {studentLessons?.find(f => f.lessonDto.id === Lesson.id)?.lessonVisit}
                    onClick={() => {
                      goCheck(studentLessons?.find(f => f.lessonDto.id === Lesson.id)?.id, studentLessons?.find(f => f.lessonDto.id === Lesson.id)?.studentDto.email);
                    }}
                  />
                );
              })
              }
              </>
            </ScheduleItem>
          );
        })}
       </div>
     </div>
  );
};
