import {ActionTypes} from './constants';

/**
 * This action creator is used for fetching Home data  from server.
 */
export const fetchHomeData = () => ({
  type: ActionTypes.FETCH_HOME_DATA,
});
