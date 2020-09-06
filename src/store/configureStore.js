/**

 * Filename: configureStore.js
 *
 */

import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
import appReducer from '../reducers';

// Imports: Redux Root Saga
import {rootSaga} from '../sagas';
//import PDPReducer from '../pages/ProductDetailPage/reducer';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(appReducer, applyMiddleware(sagaMiddleware, logger));

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {store};
