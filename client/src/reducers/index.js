import { combineReducers } from "redux";
import announcementReducer from "./announcementReducer";

import cleaningMovementReducer from "./Activities/cleaningMovements";
import ecoProjectReducer from "./Activities/ecoProjects";
import educationTourReducer from "./Activities/educationTour";
import plantationDriveReducer from "./Activities/plantationDrive";

export default combineReducers({
  announcementReducer,
  cleaningMovementReducer,
  ecoProjectReducer,
  educationTourReducer,
  plantationDriveReducer,
});
