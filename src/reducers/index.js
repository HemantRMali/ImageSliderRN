import {combineReducers} from 'redux';

// Imports: Reducers here
import HomeReducer from '../screens/home/reducer';

// Redux: Root Reducer
const appReducer = combineReducers({
  HomeReducer,
});

//export default appReducer;

export default (state, action) => appReducer(state, action);
