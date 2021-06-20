const initialState = {
  resources: [],
  loading: false,
  successful: "no op",
};

const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getResources":
      return {
        ...state,
        resources: action.payload,
        loading: false,
      };
    case "addResource":
      return {
        ...state,
        resources: [action.payload, ...state.resources],
      };
    case "deleteResource":
      return {
        ...state,
        resources: state.resources.filter(
          (resource) => resource._id !== action.payload
        ),
      };
    case "updateResource":
      return {
        ...state,
        resources: [
          action.payload,
          ...state.resources.filter(
            (resource) => resource._id !== action.payload._id
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

export default resourceReducer;
