import axios from 'axios';

const PORT = process.env.PORT || 3001;
const URL = process.env.NODE_ENV == 'production' ? 'https://webinjaz.herokuapp.com/' : 'http://localhost:'+PORT;

export const REQ_SHAPES = 'REQ_SHAPES';
function reqShapes() {
    return {
        type: REQ_SHAPES
    }
}

export const RES_SHAPES = 'RES_SHAPES';
function resShapes(shapesList) {
    return {
        type: RES_SHAPES,
        payload: shapesList
    }
}

export const RES_SHAPES_ERROR = 'RES_SHAPES_ERROR';
function resShapesError(err) {
    return {
        type: RES_SHAPES_ERROR,
        error: err
    }
}
 
export function getShapesList() {
    return function(dispatch) {
        dispatch(reqShapes());
        axios.get(`${URL}/shapes`)
            .then(res => {
                dispatch(resShapes(res.data));
            },
            err => {
                dispatch(resShapesError(err));
            });
    }
}