const initialState = {
  announcements: [],
  loading: false,
  successful: "no op",
};

const announcementReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getAnnouncements":
      return {
        ...state,
        announcements: action.payload,
        loading: false,
      };
    case "addAnnouncement":
      return {
        ...state,
        announcements: [action.payload, ...state.announcements],
      };
    case "deleteAnnouncement":
      return {
        ...state,
        announcements: state.announcements.filter(
          (announcement) => announcement._id !== action.payload
        ),
      };
    case "updateAnnouncement":
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

export default announcementReducer;
