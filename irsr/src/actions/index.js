import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA"

export const fetchData = () =>{
    return dispatch =>{
        dispatch({type:FETCH_DATA});
        axios
            .get('')
    }
}