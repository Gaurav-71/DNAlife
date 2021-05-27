const initialState = {
  announcements: [],
  loading: false,
  successful: "no op",
};

const educationTourReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getEducationTours":
      return {
        ...state,
        announcements: action.payload,
        loading: false,
      };
    case "addEducationTour":
      return {
        ...state,
        announcements: [action.payload, ...state.announcements],
      };
    case "deleteEducationTour":
      return {
        ...state,
        announcements: state.announcements.filter(
          (announcement) => announcement._id !== action.payload
        ),
      };
    case "updateEducationTour":
      return {
        ...state,
        announcements: [
          action.payload,
          ...state.announcements.filter(
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
