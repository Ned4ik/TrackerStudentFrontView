import React from "react";

import style from "./style.module.scss";

import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const nav = useNavigate();

  const back = () => {
    nav(-1);
  };

  return (
    <div className={style.notfound}>
      <h1 className={style.nf_title}>404</h1>
      <h1 className={`${style.nf_desc} mt-10`}>Page not found</h1>
    </div>
  );
};

export default NotFound;
