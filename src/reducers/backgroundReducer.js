import { REQ_CSS, RES_CSS, RES_ERROR} from '../actions/backgroundAction';

const initialState = {
    variables: {
        name: ''
    }
};

export default function(state = initialState, action) {
    switch(action.type) {
        case REQ_CSS:            
            return {
                ...state,
                variables: action.params
            }
        case RES_CSS:
            return {
                ...state,
                variables: action.params,
                css: action.css
            }
        case RES_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}