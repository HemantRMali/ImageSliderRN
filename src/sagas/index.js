import {all} from 'redux-saga/effects';

// Imports: Redux Sagas

import {fetchHomeDataWatcher} from '../screens/home/saga';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fetchHomeDataWatcher()]);
}
