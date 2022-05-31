import React from "react";

import "./style.scss";
import { useNavigate } from "react-router-dom";
import {UniversityLinkButton} from "../Buttons/UniversityLinkButton";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";

export const UniversityHeader: React.FC = () => {
  const nav = useNavigate();
  const teacher = useTypedSelector((state) => state.userReducer.teacher);

  return (
    <div className="mhead">
      <div className="mhead-left">
        <h1
          className="Umhd-title"
          onClick={() => {
            window.location.reload();
          }}
        >
          Мисис СКУД
        </h1>
        <div className="mhead-list">
          {teacher !== null ? (
              <UniversityLinkButton
                className="textyellow-400"
                text="Терминал"
                onClick={() => {
                  console.log("uns");
                  nav("/universitystudents");
                }}/>
          ) : null}
          <UniversityLinkButton
            className="mhd-option"
            text="История"
            onClick={() => {
            //   nav("");
            }}
          />
        </div>
      </div>
    </div>
  );
};
