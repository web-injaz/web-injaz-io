import axios from 'axios';

export const REQ_SIGNUP = 'REQ_SIGNUP';
export function reqSignUp(loading) {
    return {
        type: REQ_SIGNUP,
        payload: loading
    }
}

export const REQ_SIGNIN = 'REQ_SIGNIN';
export function reqSignIn(loading) {
    return {
        type: REQ_SIGNIN,
        payload: loading
    }
}

export const RES_SIGNUP = 'RES_SIGNUP';
export function resSignUp(res) {
    return {
        type: RES_SIGNUP,
        payload: res
    }
}

export const RES_SIGNIN = 'RES_SIGNIN';
export function resSignIn(res) {
    return {
        type: RES_SIGNIN,
        payload: res
    }
}

export function signupAction(userData) {
    return function(dispatch) {
        dispatch(reqSignUp(true));
        axios.post(`${process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://webinjaz.herokuapp.com'}/user/register`, userData)
        .then(res => {
            dispatch(reqSignUp(false));
            dispatch(resSignUp(res));
        }, err => {
            dispatch(reqSignUp(false));
            dispatch(resSignUp(err.response.data));
        });
    }
}

export function signinAction(userData) {
    return function(dispatch) {
        dispatch(reqSignIn(true));
        axios.post(`${process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://webinjaz.herokuapp.com'}/user/login`, userData)
        .then(res => {            
            dispatch(reqSignIn(false));
            dispatch(resSignIn(res));
        }, err => {
            dispatch(reqSignIn(false));
            dispatch(resSignIn(err.response.data));
        });
    }
}