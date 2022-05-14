import * as UserActions from "../Reducers/AccountReducer/actions";
import * as ScheduleActions from "../Reducers/ScheduleReducer/actions";
import * as LessonActions from "../Reducers/LessonReducer/actions";
import * as UniversityActions from "../Reducers/UniversityReducer/actions";
import * as SearchActions from "../Reducers/SearchReducer/actions";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  ...UserActions,
  ...ScheduleActions,
  ...LessonActions,
  ...UniversityActions,
  ...SearchActions,
};
