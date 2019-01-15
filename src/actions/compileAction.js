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

function resCompile(result) {    
    return {
        type: RES_COMPILE,
        result
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
        return axios.get(`${process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://webinjaz.herokuapp.com'}/api/compile`, {
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