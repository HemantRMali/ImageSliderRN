/**
 * Redux-Saga Effects
 */
import {takeLatest, put} from 'redux-saga/effects';
/**
 * Constants
 */
import {ActionTypes} from './constants';

/**
 *
 * @author Hemant Mali
 */
function* fetchHomeData() {
  const photos = yield fetch('https://picsum.photos/list').then((response) =>
    response.json(),
  );
  console.log('photos:', photos);
  yield put({type: ActionTypes.LOAD_HOME_DATA, payload: {photos}});
}

/**
 * This generator function is used as watcher for FETCH_TRENDING_SEARCH action.
 * @author Hemant Mali
 * @export
 */
export function* fetchHomeDataWatcher() {
  yield takeLatest(ActionTypes.FETCH_HOME_DATA, fetchHomeData);
}
