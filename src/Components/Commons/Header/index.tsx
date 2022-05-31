import React from "react";

import "./style.scss";
import { useNavigate } from "react-router-dom";
import { LinkButton } from "../Buttons/LinkButton";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { useActions } from "../../../Hooks/useActions";

export const Header: React.FC = () => {
  const nav = useNavigate();

  const { LogoutUser } = useActions();

  const teacher = useTypedSelector((state) => state.userReducer.teacher);

  return (
    <div className="mhead">
      <div className="mhead-left">
        <h1
          className="mhd-title"
          onClick={() => {
            nav("");
            window.location.reload();
          }}
        >
          Студент Чекер
        </h1>
        <div className="mhead-list">
          {teacher !== null ? (
              <LinkButton
                className=""
                text="Отчет"
                onClick={() => {
                  console.log("uns");
                  nav("report");
                }}/>
          ) : null}
          <LinkButton
            className=""
            text="Расписание"
            onClick={() => {
              nav("schedule");
            }}
          />
        </div>
      </div>
      <div className="mhead-right">
        {localStorage.getItem("token") === null ||
        localStorage.getItem("token") === undefined ? (
          <LinkButton
            className=""
            text="Войти"
            onClick={() => {
              nav("login");
            }}
          />
        ) : (
          <LinkButton
            className=""
            text="Выйти"
            onClick={() => {
              LogoutUser();
              nav("");
            }}
          />
        )}
      </div>
    </div>
  );
};
