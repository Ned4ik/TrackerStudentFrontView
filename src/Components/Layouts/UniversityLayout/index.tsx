import React from "react";
import { Outlet } from "react-router-dom";
import { UniversityHeader } from "../../Commons/UniversityHeader";

export const UniversityLayout: React.FC = ({}) => {
  return (
    <div>
      <UniversityHeader />
      <Outlet />
    </div>
  );
};


