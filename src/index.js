import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import App from './App';
import BuildTools from './components/BuildTools';
import Styler from './containers/Styler';
import Shaper from './containers/Shaper';
import Credits from './components/Credits';
import ErrorBoundary from './ErrorBoundary';

import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render((
    <Provider store={store}>
        <ErrorBoundary>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/build" component={BuildTools} />
                    <Route exact path="/build/styler" component={Styler} />
                    <Route exact path="/build/shaper" component={Shaper} />
                    <Route exact path="/credits" component={Credits} />
                    <Route exact path="*" render={() => <Redirect to="/" />} />
                </Switch>
            </BrowserRouter>
        </ErrorBoundary>
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
