import { REQ_SHAPES, RES_SHAPES, RES_SHAPES_ERROR,
         ADD_SHAPE, ADD_SHAPE_ERROR } from '../actions/shapesAction';

const initialState = {
    shapesList: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case REQ_SHAPES:
            return {
                ...state
            }
        case RES_SHAPES:
            return {
                ...state,
                shapesList: action.payload
            }
        case RES_SHAPES_ERROR:
            return {
                ...state,
                error: action.error
            }
        case ADD_SHAPE:
            return {
                ...state,
                addedShape: action.payload
            }
        case ADD_SHAPE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}