import { combineReducers } from 'redux';

import demoReducer from './demoReducer';
import shapesReducer from './shapesReducer';
import compileReducer from './compileReducer';

import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    demo: demoReducer,
    shapes: shapesReducer,
    compile: compileReducer,
    form: formReducer
});

export default rootReducer;