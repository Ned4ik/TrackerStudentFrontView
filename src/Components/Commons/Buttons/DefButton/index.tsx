import React from "react";

export interface IDefButton {
  text: string;
  onClick: () => void;
}

export const DefButton: React.FC<IDefButton> = ({ text, onClick }) => {
  return (
    <button
      className="py-4 px-8 bg-blue-500 rounded-sm text-white transition-all hover:scale-105"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
