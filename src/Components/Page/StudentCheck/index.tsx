import React from "react";
import { useParams } from "react-router-dom";


export const StudentCheck: React.FC = () =>{
    const {id, email} = useParams()
    return(
        <div className="overflow-hidden w-screen h-screen flex justify-center items-center">
            <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${window.location.origin.toString()}/schedule/studentverification/${id}/${email}&amp;size=300x300`} alt="" title="" width={300} height={300} />
        </div>
    )
}