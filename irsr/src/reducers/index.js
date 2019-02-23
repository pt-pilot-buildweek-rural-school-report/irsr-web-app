import { LOGIN_STATE, POSTING_ISSUE, POST_ISSUE, ERROR, DELETING_ISSUE, DELETE_ISSUE } from "../actions/index";

const initialState = {
  id: null,
  issues: [],
  name: "",
  role: "",
  school_id: null,
  postIssue: false,
  postingIssue: false,
  deletingIssue: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case LOGIN_STATE:
      return {
        ...state,
        ...action.payload
      };
      case POST_ISSUE:
      return{
        ...state,
        issues: [...state.issues,action.payload],
        postIssue:true
      }
      case POSTING_ISSUE:
      return{
        ...state,
        postingIssue: true

      }
      case DELETE_ISSUE:
      return{
        ...state,
        deletingIssue: false,
        issues: state.issues.filter(issue => issue.id !== action.id)
      }
      case DELETING_ISSUE:
      return {
        ...state,
        deletingIssue: true
      }
    default:
    return state;
  }
};

