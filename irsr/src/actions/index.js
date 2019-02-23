import axios from 'axios';

export const LOGIN_STATE = "LOGIN_STATE"
export const POSTING_ISSUE = "POSTING_ISSUE"
export const POST_ISSUE = "POST_ISSUE"
export const ERROR = "ERROR"
export const DELETING_ISSUE = "DELETING_ISSUE" 
export const DELETE_ISSUE = "DELETE_ISSUE"

export const loginData = (loginState) =>{
    return dispatch =>{
        dispatch({type:LOGIN_STATE, payload:loginState});
       
    }
}
export const postIssue = (issue) =>{
    const newIssue = axios.post('http://localhost:5000/api/login',issue)

    return dispatch => {
        dispatch({type: POSTING_ISSUE});

        newIssue.then(({data}) =>{
            dispatch({
                type: POST_ISSUE,
                payload: data
            })
        })
        .catch( error =>{
            dispatch({type: ERROR, payload: error})
        })
    }
}
export const deleteIssue = (id) => dispatch =>{
    dispatch({type: DELETING_ISSUE})
    axios
        .delete('http://localhost:5000/api/login')
        .then(()=>{
            dispatch({DELETE_ISSUE, id})
        })
        .catch( error =>{
            dispatch({type: ERROR, payload: error})
        })
}