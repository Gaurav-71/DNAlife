const initialState = {
  newss: [],
  loading: false,
  successful: "no op",
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getNewss":
      return {
        ...state,
        newss: action.payload,
        loading: false,
      };
    case "addNews":
      return {
        ...state,
        newss: [action.payload, ...state.newss],
      };
    case "deleteNews":
      return {
        ...state,
        newss: state.newss.filter((news) => news._id !== action.payload),
      };
    case "updateNews":
      return {
        ...state,
        newss: [
          action.payload,
          ...state.newss.filter((news) => news._id !== action.payload._id),
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

export default newsReducer;
