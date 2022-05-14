import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../Hooks/useActions";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { ILoginForm } from "../../../Redux/Reducers/AccountReducer/types";
import { DefButton } from "../../Commons/Buttons/DefButton";
import { InputField } from "../../Commons/Input";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isStudent, setStudent] = useState(false);

  const { loginStudent, loginTeacher } = useActions();

  const nav = useNavigate();

  const error = useTypedSelector((state) => state.userReducer.error);
  const loading = useTypedSelector((state) => state.userReducer.loading);

  useEffect(() => {
    var storage = localStorage.getItem("token");
    if (storage !== null) {
      nav("/");
    }
  }, [localStorage.getItem("token")]);

  const onLogin = async () => {
    try {
      const request: ILoginForm = {
        email: email,
        password: password,
      };
      if (isStudent) {
        await loginStudent(request);
        localStorage.setItem("descriminator", "student");
      } else {
        await loginTeacher(request);
        localStorage.setItem("descriminator", "teacher");
      }

      nav("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="overflow-hidden w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-medium text-4xl">Login</h1>
        <hr />
        <div className="py-5">
          {loading ? "Loading" : null}
          <h1 className="font-medium text-red-400">{error}</h1>
        </div>
        <div className="flex flex-col gap-3">
          <InputField
            type="email"
            placeholder="Email"
            value=""
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
          <InputField
            type="password"
            placeholder="Password"
            value=""
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
          />
          <div className="flex justify-between">
            <input
              type={"checkbox"}
              defaultChecked={isStudent}
              onChange={() => {
                setStudent(!isStudent);
              }}
            />
            <h1 className="font-medium">You are student?</h1>
          </div>
          <DefButton text="Login" onClick={onLogin} />
        </div>
      </div>
    </div>
  );
};
