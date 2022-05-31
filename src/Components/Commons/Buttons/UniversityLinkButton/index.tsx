import React from "react";
import { IULinkButton } from "./types";

import "./style.scss";

export const UniversityLinkButton: React.FC<IULinkButton> = ({ text, onClick }) => {
  return (
    <button className="Ulbtn" onClick={onClick}>
      {text}
    </button>
  );
};
