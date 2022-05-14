import { stat } from "fs";
import { Guid } from "guid-typescript";
import React, { useEffect } from "react";
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

  useEffect(() => {
    if(student !== null)
    {
      getStudentLessons(student.email);
    }else{
      getSchedule();
    }
  }, []);

  const schedules = useTypedSelector((state) => state.scheduleReducer.schedule);
  const teacher = useTypedSelector((state) => state.userReducer.teacher);

  const studentLessons = useTypedSelector((state) => state.scheduleReducer.studentLessons);
  const student = useTypedSelector((state) => state.userReducer.student);

  const goLesson = (name: string, id: string) => {
    if (teacher !== null) {
      nav(`lesson/${name}/${id}`);
    }
  };

  const goCheck = (id: string, email:string) =>{
    nav(`studentcheck/${id}/${email}`)
  }

  // return (
  //   <div className="w-screen overflow-y-hidden py-5 px-10 flex flex-col justify-center gap-10">
  //     <h1 className="text-3xl font-bold text-blue-500 text-center">Schedule</h1>

  //     <div className="grid grid-rows-auto grid-cols-1 px-80 gap-2">
  //     {
  //       	teacher !== null ?
  //             schedules?.map((lesson) => {
	// 							return (
  //               <LessonsItem
  //                   key={Guid.create().toString()}
  //                   name={lesson.lessonDtos?}
  //                   time={lesson.startTime}
  //                   onClick={() => {
  //                     goLesson(lesson.name, lesson.id);
  //                   }}
  //                 />
  //               )
  //             })
  //         : 
  //           	studentLessons?.map((studentLesson) => {
  //             	return (
  //               <LessonItemStudent
  //                   key={Guid.create().toString()}
  //                   name={studentLesson.lessonDto.name}
  //                   time={studentLesson.lessonDto.startTime}
  //                   IsCheck = {studentLesson.lessonVisit}
  //                   onClick={() => {
  //                     // goLesson(lesson.name, lesson.id);
  //                   }}
  //                 />
  //               )
  //             })
  //       }
        






  //       {/* {schedules?.map((schedule) => {
  //         return (
  //           <ScheduleItem
  //             key={Guid.create().toString()}
  //             day={schedule.scheduleDto.date}
  //           >
  //             <> {teacher !== null 
  //             ? schedule.lessonDtos?.map((lesson) => {
  //               return (
  //                 <LessonsItem
  //                   key={Guid.create().toString()}
  //                   name={lesson.name}
  //                   time={lesson.startTime}
  //                   onClick={() => {
  //                     goLesson(lesson.name, lesson.id);
  //                   }}
  //                 />
  //               );
  //             }): studentLessons?.map((studentLesson) => {
  //               return (
  //                 <LessonItemStudent
  //                   key={Guid.create().toString()}
  //                   name={studentLesson.lessonDto.name}
  //                   time={studentLesson.lessonDto.startTime}
  //                   IsCheck = {studentLesson.lessonVisit}
  //                   onClick={() => {
  //                     // goLesson(lesson.name, lesson.id);
  //                   }}
  //                 />
  //               );
  //             })
  //             }
  //             </>
  //           </ScheduleItem>
  //         );
  //       })} */}
  //     </div>
  //   </div>
  // );




  return (
    <div className="w-screen overflow-y-hidden py-5 px-10 flex flex-col justify-center gap-10">
      <h1 className="text-3xl font-bold text-blue-500 text-center">Schedule</h1>

      <div className="grid grid-rows-auto grid-cols-1 px-80 gap-2">
 				{
        	teacher !== null ?
              schedules?.map((schedule) => {
								return (
                		<ScheduleItem
                      key={Guid.create().toString()}
                      day={schedule.scheduleDto.date}
                    >
                      <>
                      	{schedule.lessonDtos?.map((lesson) => {
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
                        })}
                      </>
                    </ScheduleItem>
                )
              })
          : 
            	studentLessons?.map((studentLesson) => {
              	return (
                <LessonItemStudent
                    key={Guid.create().toString()}
                    name={studentLesson.lessonDto.name}
                    time={studentLesson.lessonDto.startTime}
                    IsCheck = {studentLesson.lessonVisit}
                    onClick={() => {
                      goCheck(studentLesson.id, studentLesson.studentDto.email);
                    }}
                  />
                )
              })
        }
      </div>
    </div>
  );

};
