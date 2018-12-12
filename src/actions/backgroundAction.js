import axios from 'axios';

const PORT = process.env.PORT || 3001;
const URL = process.env.NODE_ENV == 'production' ? 'https://webinjaz.herokuapp.com/' : 'http://localhost:'+PORT;

export const REQ_CSS = 'REQ_CSS';
function reqCss(params) {
    return {
        type: REQ_CSS,
        params
    }
}

export const RES_CSS = 'RES_CSS';
function resCss(params, css) {
    return {
        type: RES_CSS,
        params,
        css
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
        return axios.get(`${URL}/bg`, {
            params: variables
        }).then(res => {
            if (res.status === 200 && res.headers['content-type'] === "text/css") {
                dispatch(resCss(variables, res.data));
            } else {
                dispatch(resError(new Error(res.request.statusText)));
            }
        }, error => {
            dispatch(resError(error));
        });
    }
}