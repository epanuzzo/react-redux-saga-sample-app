import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { Router, Route, Switch } from 'react-router';
import history from 'SERVICES/history';

import * as serviceWorker from './serviceWorker';

import rootSaga from './sagas';
import rootReducer from './reducers';
import ErrorBoundary from 'COMPONENTS/ErrorBoundary';
import Template from 'CONTAINERS/Template';
import Main from 'CONTAINERS/Main';
import About from 'CONTAINERS/About';

import './index.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

const rootElement = document.getElementById('root');

ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <ErrorBoundary>
                    <Template>
                        <Switch>
                            <Route
                                path="/"
                                render={() => (
                                    <ErrorBoundary>
                                        <Main />
                                    </ErrorBoundary>
                                )}
                                exact
                            />
                            <Route
                                path="/about"
                                render={() => (
                                    <ErrorBoundary>
                                        <About />
                                    </ErrorBoundary>
                                )}
                            />
                        </Switch>
                    </Template>
                </ErrorBoundary>
            </Router>
        </Provider>,
    rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
