import { REQ_SIGNIN, REQ_SIGNUP, RES_SIGNIN, RES_SIGNUP } from '../actions/userAction';

const initialState = {};

export default function(state = initialState, action) {
    switch(action.type) {
        case REQ_SIGNIN:            
            return {
                ...state,
                loading: action.payload
            }
        case REQ_SIGNUP:            
            return {
                ...state,
                loading: action.payload
            }
        case RES_SIGNIN:
            return {
                ...state,
                res: action.payload
            }
        case RES_SIGNUP:
            return {
                ...state,
                res: action.payload
            }
        default:
            return state;
    }
}