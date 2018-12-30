import axios from 'axios';

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
 
export function getShapesList(shapes) {
    return function(dispatch) {
        dispatch(reqShapes());
        axios.get(`https://webinjaz.herokuapp.com/api/shapes`, {
        // axios.get(`http://localhost:3001/api/shapes`, {
            params: shapes
        })
        .then(res => {
            dispatch(resShapes(res.data));
        },
        err => {
            dispatch(resShapesError(err));
        });
    }
}