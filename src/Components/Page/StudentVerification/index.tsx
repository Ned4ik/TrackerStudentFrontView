import { request } from "http";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../../Hooks/useActions";
import { ILessonTrackerChangeForm } from "../../../Redux/Reducers/LessonReducer/types";


export const StudentVerification: React.FC = () =>{
    const {id, email} = useParams()
    const {changeLessonTracker} = useActions()
    useEffect(() =>{
        var request: ILessonTrackerChangeForm = {
            id: `${id}`,
            email: `${email}`,
            lessonVisit: true
        }
        changeLessonTracker(request);
    },[])
  
    return(

        <div className="overflow-hidden w-screen h-screen flex justify-center items-center">
           <h1 className="font-bold text-2xl">Вы прошли авторизацию...</h1> 
        </div>
    )
}