const initialState = {
  education: [],
  loading: false,
  successful: "no op",
};

const certificateCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getCertificateCourses":
      return {
        ...state,
        education: action.payload,
        loading: false,
      };
    case "addCertificateCourse":
      return {
        ...state,
        education: [action.payload, ...state.education],
      };
    case "deleteCertificateCourse":
      return {
        ...state,
        education: state.education.filter((edu) => edu._id !== action.payload),
      };
    case "updateCertificateCourse":
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

export default certificateCoursesReducer;
