import { combineReducers } from "redux";
import { userReducer } from "./AccountReducer";
import { lessonReducer } from "./LessonReducer";
import { scheduleReducer } from "./ScheduleReducer";
import { searchReducer } from "./SearchReducer";
import { universityReducer } from "./UniversityReducer";

export const rootReducer = combineReducers({
  userReducer: userReducer,
  scheduleReducer: scheduleReducer,
  lessonReducer: lessonReducer,
  universityReducer: universityReducer,
  searchReducer: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
