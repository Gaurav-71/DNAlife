import { combineReducers } from "redux";
import announcementReducer from "./announcementReducer";

import cleaningMovementReducer from "./Activities/cleaningMovements";
import ecoProjectReducer from "./Activities/ecoProjects";
import educationTourReducer from "./Activities/educationTour";
import plantationDriveReducer from "./Activities/plantationDrive";

import certificateCourseReducer from "./Education/certificateCourses";
import internshipReducer from "./Education/internships";
import trainingReducer from "./Education/training";

import photoReducer from "./photosReducer";

export default combineReducers({
  announcementReducer,
  cleaningMovementReducer,
  ecoProjectReducer,
  educationTourReducer,
  plantationDriveReducer,
  internshipReducer,
  trainingReducer,
  certificateCourseReducer,
  photoReducer,
});
