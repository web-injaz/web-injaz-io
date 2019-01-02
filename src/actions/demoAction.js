import axios from 'axios';

export const REQ_CSS = 'REQ_CSS';
function reqCss(params) {
    return {
        type: REQ_CSS,
        params
    }
}

export const RES_CSS = 'RES_CSS';
function resCss(params, result) {
    return {
        type: RES_CSS,
        params,
        result
    }
}

export const RES_ERROR = 'RES_ERROR';
function resError(error) {
    return {
        type: RES_ERROR,
        error
    }
}

export function changeBackground(variables) {    
    return function(dispatch) {
        dispatch(reqCss(variables));
        return axios.get(`https://webinjaz.herokuapp.com/api/demo`, {
        // return axios.get(`http://localhost:5000/api/demo`, {
            params: variables
        }).then(res => {            
            if (res.status === 200) {                
                dispatch(resCss(variables, res.data));
            } else {
                dispatch(resError(new Error(res.request.statusText)));
            }
        }, error => {
            dispatch(resError(error));
        });
    }
}