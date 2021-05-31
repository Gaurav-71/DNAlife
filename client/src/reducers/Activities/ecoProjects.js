const initialState = {
  activities: [],
  loading: false,
  successful: "no op",
};

const ecoProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getEcoProjects":
      return {
        ...state,
        activities: action.payload,
        loading: false,
      };
    case "addEcoProject":
      return {
        ...state,
        activities: [action.payload, ...state.activities],
      };
    case "deleteEcoProject":
      return {
        ...state,
        activities: state.activities.filter(
          (announcement) => announcement._id !== action.payload
        ),
      };
    case "updateEcoProject":
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

export default ecoProjectReducer;
