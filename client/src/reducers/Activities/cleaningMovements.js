const initialState = {
  activities: [],
  loading: false,
  successful: "no op",
};

const cleaningMovementReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getCleaningMovements":
      return {
        ...state,
        activities: action.payload,
        loading: false,
      };
    case "addCleaningMovement":
      return {
        ...state,
        activities: [action.payload, ...state.activities],
      };
    case "deleteCleaningMovement":
      return {
        ...state,
        activities: state.activities.filter(
          (announcement) => announcement._id !== action.payload
        ),
      };
    case "updateCleaningMovement":
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

export default cleaningMovementReducer;
