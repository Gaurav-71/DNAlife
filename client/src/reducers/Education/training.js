const initialState = {
  education: [],
  loading: false,
  successful: "no op",
};

const trainingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getTrainings":
      return {
        ...state,
        education: action.payload,
        loading: false,
      };
    case "addTraining":
      return {
        ...state,
        education: [action.payload, ...state.education],
      };
    case "deleteTraining":
      return {
        ...state,
        education: state.education.filter((edu) => edu._id !== action.payload),
      };
    case "updateTraining":
      return {
        ...state,
        education: [
          action.payload,
          ...state.education.filter((edu) => edu._id !== action.payload._id),
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

export default trainingsReducer;
