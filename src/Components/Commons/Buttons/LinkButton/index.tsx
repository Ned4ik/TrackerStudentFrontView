import React from "react";
import { ILinkButton } from "./types";

import "./style.scss";

export const LinkButton: React.FC<ILinkButton> = ({ text, onClick }) => {
  return (
    <button className="lbtn" onClick={onClick}>
      {text}
    </button>
  );
};
