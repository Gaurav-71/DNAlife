const initialState = {
  documentations: [],
  loading: false,
  successful: "no op",
};

const documentationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getDocumentations":
      return {
        ...state,
        documentations: action.payload,
        loading: false,
      };
    case "addDocumentation":
      return {
        ...state,
        documentations: [action.payload, ...state.documentations],
      };
    case "deleteDocumentation":
      return {
        ...state,
        documentations: state.documentations.filter(
          (documentation) => documentation._id !== action.payload
        ),
      };
    case "updateDocumentation":
      return {
        ...state,
        documentations: [
          action.payload,
          ...state.documentations.filter(
            (documentation) => documentation._id !== action.payload._id
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

export default documentationReducer;
