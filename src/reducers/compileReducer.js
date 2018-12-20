import { REQ_COMPILE, RES_COMPILE, RES_COMPILE_ERROR } from '../actions/compileAction';

const initialState = {};

export default function(state = initialState, action) {
    switch(action.type) {
        case REQ_COMPILE:
            return {
                ...state,
                variables: action.variables
            };
        case RES_COMPILE:
            return {
                ...state,
                css: action.css
            };
        case RES_COMPILE_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}