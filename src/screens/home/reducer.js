/**
 * Constants
 */
import {ActionTypes} from './constants';

// Initial Statt
const initialState = {
  photos: [],
};

// Redux: Home Reducer
const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_HOME_DATA:
      return {...state, loading: true};

    case ActionTypes.LOAD_HOME_DATA:
      return {...state, loading: false, photos: action.payload.photos};

    case ActionTypes.ERROR_HOME_DATA:
      return {...state, loading: false, homeAPIError: action.payload};

    default: {
      return state;
    }
  }
};

// Exports
export default HomeReducer;
