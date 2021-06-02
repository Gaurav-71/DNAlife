const initialState = {
  photos: [],
  loading: false,
  successful: "no op",
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getPhotos":
      return {
        ...state,
        photos: action.payload,
        loading: false,
      };
    case "addPhoto":
      return {
        ...state,
        photos: [action.payload, ...state.photos],
      };
    case "deletePhoto":
      return {
        ...state,
        photos: state.photos.filter((photo) => photo._id !== action.payload),
      };
    case "updatePhoto":
      return {
        ...state,
        photos: [
          action.payload,
          ...state.photos.filter((photo) => photo._id !== action.payload._id),
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

export default photoReducer;
