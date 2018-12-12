import { combineReducers } from 'redux';

import backgroundReducer from './backgroundReducer';
import shapesReducer from './shapesReducer';

const rootReducer = combineReducers({
    backgroundReducer,
    shapesReducer
});

export default rootReducer;