import axios from 'axios';

export const REQ_COMPILE = 'REQ_COMPILE';
export const RES_COMPILE = 'RES_COMPILE';
export const RES_COMPILE_ERROR = 'RES_COMPILE_ERROR';

function reqCompile(variables) {
    return {
        type: REQ_COMPILE,
        variables
    }
}

function resCompile(css) {
    return {
        type: RES_COMPILE,
        css
    }
}

function resCompileError(error) {
    return {
        type: RES_COMPILE_ERROR,
        error
    }
}

export function compileToCss(variables) {
    return function(dispatch) {
        dispatch(reqCompile(variables));
        return axios.get(`https://webinjaz.herokuapp.com/api/compile`, {
        // axios.get('http://localhost:5000/api/compile', {
            params: variables
        })
        .then(res => {
            if (res.status === 200 && res.data.status !== 209) {
                dispatch(resCompile(res.data));
            } else {
                dispatch(resCompileError(res.data.message));
            }
        }, error => {                
            if (error) dispatch(resCompileError(error));
        });
    }
}