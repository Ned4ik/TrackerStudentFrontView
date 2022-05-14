import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

import jwt_decode from "jwt-decode";
import {
  InitStudent,
  InitTeacher,
} from "./Redux/Reducers/AccountReducer/actions";
import { IInitGet } from "./Redux/Reducers/AccountReducer/types";

const token = localStorage.getItem("token");
if (token !== null && token !== undefined) {
  if (token !== "") {
    if (localStorage.getItem("descriminator") === "student") {
      InitStudent(token, store.dispatch);
    } else {
      InitTeacher(token, store.dispatch);
    }
  }
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
