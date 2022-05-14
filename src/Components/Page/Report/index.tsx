import { Guid } from "guid-typescript";
import React, { useEffect, useRef, useState } from "react";
import { useActions } from "../../../Hooks/useActions";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { FilterUser } from "../../../Redux/Reducers/AccountReducer/types";

export const Report: React.FC = () => {
  const [pass, setPass] = useState("studentpass");
  const [lessonType, setLessonType] = useState("bycourse");
  const [search, setSearch] = useState("");
  const [filterState, setFilterState] = useState<Array<FilterUser> | null>(
    null
  );

  const tableRef = useRef(null);

  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");

  const courses = useTypedSelector((state) => state.searchReducer.courses);
  const groups = useTypedSelector((state) => state.searchReducer.groups);
  const lessons = useTypedSelector((state) => state.searchReducer.lessons);
  const filter = useTypedSelector((state) => state.userReducer.filter);

  const { getCourses, getGroups, getLessons, getFilterCourse, getFilterGroup } =
    useActions();

  const onPass = (e: string) => {
    setPass(e);
    if (e === "warn") {
      let tempArr = filter?.filter(
        (f) => f.studentDto.timePass >= 30 && f.studentDto.timePass < 60
      );
      if (tempArr !== undefined && tempArr !== null && tempArr.length !== 0) {
        setFilterState(tempArr);
      }
    }
    if (e === "deductions") {
      let tempArr = filter?.filter((f) => f.studentDto.timePass >= 60);
      if (tempArr !== undefined && tempArr !== null && tempArr.length !== 0) {
        setFilterState(tempArr);
      }
    }
    if (e === "studentpass") {
      if (search === "") {
        setFilterState(filter);
      } else {
        const searched = filter?.filter((f) =>
          f.studentDto.email.includes(search)
        );
        if (searched !== null && searched !== undefined) {
          setFilterState(searched);
        }
      }
    }
  };

  const onLessonType = (e: string) => {
    setLessonType(e);
    if (e === "bygroup") {
      getGroups();
    }
    console.log(e);
  };

  const onSearch = (value: string) => {
    setSearch(value);
    if (value === "") {
      setFilterState(filter);
      return;
    }
    const searched = filter?.filter((f) => f.studentDto.email.includes(value));
    if (searched !== null && searched !== undefined) {
      setFilterState(searched);
    }
  };

  useEffect(() => {
    getCourses();
    getLessons();
  }, []);

  useEffect(() => {
    setFilterState(filter);
  }, [filter]);

  useEffect(() => {
    if (courses !== null) {
      getFilterCourse(courses[0].id);
    }
  }, [courses, lessonType]);

  useEffect(() => {
    if (groups !== null) {
      getFilterGroup(groups[0].id);
    }
  }, [groups]);

  useEffect(() => {
    if (selectedCourse !== "") {
      getFilterCourse(selectedCourse);
    }
  }, [selectedCourse]);

  return (
    <div className="w-screen overflow-y-hidden py-5 px-10 flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col gap-2">
        <div className="py-5 flex justify-center items-center gap-10">
          <select
            className="bg-transparent py-2 px-4 border rounded-md"
            onChange={(e: any) => {
              onPass(e.target.value);
            }}
          >
            <option value="studentpass">Student Pass</option>
            <option value="warn">Warn</option>
            <option value="deductions">Deductions</option>
          </select>
          <select
            disabled={pass === "studentpass" ? false : true}
            className="bg-transparent py-2 px-4 border rounded-md"
            onChange={(e: any) => {
              onLessonType(e.target.value);
            }}
          >
            <option value="bycourse">By course</option>
            <option value="bygroup">By group</option>
          </select>

          {lessonType === "bycourse" ? (
            <select
              disabled={pass === "studentpass" ? false : true}
              className="bg-transparent py-2 px-4 border rounded-md"
              onChange={(e: any) => {
                setSelectedCourse(e.target.value);
              }}
            >
              {courses?.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          ) : (
            <select
              disabled={pass === "studentpass" ? false : true}
              className="bg-transparent py-2 px-4 border rounded-md"
              onChange={(e: any) => {
                setSelectedGroup(e.target.value);
              }}
            >
              {groups?.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          )}
        </div>
        <input
          disabled={pass === "studentpass" ? false : true}
          className="bg-transparent py-2 px-4 border rounded-md"
          placeholder="Enter student email"
          defaultValue={search}
          onChange={(e: any) => {
            onSearch(e.target.value);
          }}
        />

        {/* <button
          className="py-2 px-4 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={onDownload}
        >
          {" "}
          Export excel{" "}
        </button> */}
      </div>
      {lessonType === "bycourse" ? (
        <div>
          <table className="table-fixed w-full bg-gray-200" ref={tableRef}>
            <thead className="border-b border-b-black">
              <tr>
                <th className="p-3">Student</th>
                {filterState !== null
                  ? filterState[0].filterCourseLessons.map((item) => {
                      return (
                        <th key={item.lessonDto.id} className="p-3">
                          {item.lessonDto.name}
                        </th>
                      );
                    })
                  : null}
                <th className="p-3">TP</th>
              </tr>
            </thead>
            <tbody>
              {filterState?.map((item) => {
                return (
                  <tr
                    key={item.studentDto.email}
                    className="border-b border-b-black"
                  >
                    <td className="py-3">{item.studentDto.email}</td>
                    {item.filterCourseLessons.map((fs) => {
                      return (
                        <td key={Guid.create().toString()} className="py-3">
                          <div className="flex justify-center">
                            {fs.lessonVisit ? "Visit" : "Dont Visit"}
                          </div>
                        </td>
                      );
                    })}
                    <td className="py-3">
                      <div className="flex justify-center">
                        {item.studentDto.timePass}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}

      {lessonType === "bygroup" ? (
        <div>
          <table className="table-fixed w-full bg-gray-200" ref={tableRef}>
            <thead className="border-b border-b-black">
              <tr>
                <th className="p-3">Student</th>
                {lessons?.map((item) => {
                  return (
                    <th key={item.id} className="p-3">
                      {item.name}
                    </th>
                  );
                })}
                <th className="p-3">TP</th>
              </tr>
            </thead>
            <tbody>
              {filterState?.map((item) => {
                return (
                  <tr
                    key={item.studentDto.email}
                    className="border-b border-b-black"
                  >
                    <td className="py-3">{item.studentDto.email}</td>
                    {item.filterCourseLessons.map((fs) => {
                      return (
                        <td key={Guid.create().toString()} className="py-3">
                          <div className="flex justify-center">
                            {fs.lessonVisit ? "Visit" : "Dont Visit"}
                          </div>
                        </td>
                      );
                    })}
                    <td className="py-3">
                      <div className="flex justify-center">
                        {item.studentDto.timePass}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};
