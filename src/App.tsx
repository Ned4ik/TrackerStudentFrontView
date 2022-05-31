import React, { useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import MainLayout from "./Components/Layouts/MainLayout";
import { LessonDetails } from "./Components/Page/LessonDetails";
import NotFound from "./Components/Page/NotFound";
import { Schedule } from "./Components/Page/Schedule";
import { StudentCheck } from "./Components/Page/StudentCheck";
import { UniversityStudents } from "./Components/UniversityStudents";
import { StudentVerification } from "./Components/Page/StudentVerification";
import { Report } from "./Components/Page/Report";
import { UniversityLayout } from "./Components/Layouts/UniversityLayout";
import { Login } from "./Components/Page/Login";


function App() {
  const nav = useNavigate();

  if (
    localStorage.getItem("token") === null ||
    localStorage.getItem("token") === undefined
  ) {
    return (
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    );
  }

  return (
    <main className="overflow-x-hidden">
      <Routes>
        <Route path="universitystudents" element={<UniversityLayout/>}>
        <Route path="login" element={<Login/>} />
        <Route index element={<UniversityStudents />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="report" element={<Report/>} />
          <Route path="schedule" element={<Outlet />}>
            <Route index element={<Schedule />} />
            <Route path="lesson/:title/:id" element={<LessonDetails />} />
            <Route path="studentcheck/:id/:email" element={<StudentCheck/>}/>
            <Route path="studentverification/:id/:email" element={<StudentVerification/>}/>
          </Route>
        </Route>
        <Route path="login" element={<Login/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
