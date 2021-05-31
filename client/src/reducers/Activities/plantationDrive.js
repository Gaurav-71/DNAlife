const initialState = {
  activities: [],
  loading: false,
  successful: "no op",
};

const plantationDriveReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getPlantationDrives":
      return {
        ...state,
        activities: action.payload,
        loading: false,
      };
    case "addPlantationDrive":
      return {
        ...state,
        activities: [action.payload, ...state.activities],
      };
    case "deletePlantationDrive":
      return {
        ...state,
        activities: state.activities.filter(
          (announcement) => announcement._id !== action.payload
        ),
      };
    case "updatePlantationDrive":
      return {
        ...state,
        activities: [
          action.payload,
          ...state.activities.filter(
            (announcement) => announcement._id !== action.payload._id
          ),
        ],
      };
    case "setSuccess":
      return { ...state, successful: action.payload };
    case "loading":
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default plantationDriveReducer;
