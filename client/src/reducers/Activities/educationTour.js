const initialState = {
  activities: [],
  loading: false,
  successful: "no op",
};

const educationTourReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getEducationalTours":
      return {
        ...state,
        activities: action.payload,
        loading: false,
      };
    case "addEducationalTour":
      return {
        ...state,
        activities: [action.payload, ...state.activities],
      };
    case "deleteEducationalTour":
      return {
        ...state,
        activities: state.activities.filter(
          (announcement) => announcement._id !== action.payload
        ),
      };
    case "updateEducationalTour":
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

export default educationTourReducer;
