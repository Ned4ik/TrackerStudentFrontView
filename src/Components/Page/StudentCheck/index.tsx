import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";


export const StudentCheck: React.FC = () =>{
    const {id, email} = useParams()
    return(
        
        <div className="overflow-hidden w-screen h-screen items-center">
            <div className="text-center mhd-title mt-20">
                <h1>Для того чтобы авторизоваться на паре просканируйте QR код <br></br>с вашего мобильного устройства</h1>
            </div>
            <div className="flex justify-center items-center mt-20">
                <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${window.location.origin.toString()}/schedule/studentverification/${id}/${email}&amp;size=300x300`} 
                 alt="" title="" width={300} height={300} />
            </div>
           
        </div>
    )
}