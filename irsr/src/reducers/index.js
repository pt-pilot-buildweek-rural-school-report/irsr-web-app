import { LOGIN_STATE, POSTING_ISSUE, POST_ISSUE, ERROR, DELETING_ISSUE, DELETE_ISSUE } from "../actions/index";

const initialState = {
  id: null,
  issues: [],
  name: "",
  role: "",
  school_id: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STATE:
      return {
        ...state,
        ...action.payload
      };
      case POST_ISSUE:
      return{
        ...state,
        issues: action.payload
      }
      case DELETE_ISSUE:
      return{
        ...state,
        issues: state.issues.filter(issue => issue.id !== action.id)
      }
    default:
    return state;
  }
};

