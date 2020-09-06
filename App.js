import React from 'react';
import {View} from 'react-native';
import Home from './src/screens/home';
import {Provider} from 'react-redux';
import {store} from './src/store/configureStore';

const App = ({params}) => (
  <Provider store={store}>
    <Home />
  </Provider>
);
export default App;
