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
          Student Tracker
        </h1>
        <div className="mhead-list">
          {teacher !== null ? (
            <><LinkButton
              className=""
              text="University Student"
              onClick={() => {
                console.log("uns");
                nav("universitystudents");
              }}/>
              <LinkButton
                className=""
                text="Report"
                onClick={() => {
                  console.log("uns");
                  nav("report");
                }}/>
              </>
          ) : null}
          <LinkButton
            className=""
            text="Schedule"
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
            text="Login"
            onClick={() => {
              nav("login");
            }}
          />
        ) : (
          <LinkButton
            className=""
            text="Logout"
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
