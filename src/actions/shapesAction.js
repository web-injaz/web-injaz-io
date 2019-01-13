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
        // axios.get(`https://webinjaz.herokuapp.com/api/shapes`, {
        axios.get(`http://localhost:5000/api/shapes`, {
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

export const ADD_SHAPE = 'ADD_SHAPE';
export function addShapeAction(done) {
    return {
        type: ADD_SHAPE,
        payload: done
    }
}

export const ADD_SHAPE_ERROR = 'ADD_SHAPE_ERROR';
export function addShapeErrorAction(error) {
    return {
        type: ADD_SHAPE,
        payload: error
    }
}

export function addShape(shape) {
    return (dispatch) => {
        axios.post(`https://webinjaz.herokuapp.com/api/shapes`, shape)
        // axios.post(`http://localhost:5000/api/shapes`, shape)
        .then(res => dispatch(addShapeAction(res.data)), 
            err => {
                if(err) dispatch(addShapeErrorAction(err.response.data));
            }
        )
        .catch(err => dispatch(addShapeErrorAction(err)));
    }
}