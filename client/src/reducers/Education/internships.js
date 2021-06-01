const initialState = {
  education: [],
  loading: false,
  successful: "no op",
};

const internshipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getInternships":
      return {
        ...state,
        education: action.payload,
        loading: false,
      };
    case "addInternship":
      return {
        ...state,
        education: [action.payload, ...state.education],
      };
    case "deleteInternship":
      return {
        ...state,
        education: state.education.filter((edu) => edu._id !== action.payload),
      };
    case "updateInternship":
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

export default internshipsReducer;
