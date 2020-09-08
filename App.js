import React from 'react';
import { Provider } from 'react-redux';
import { YellowBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './src/reducers/index'
import Navigate from './navigate';

YellowBox.ignoreWarnings(['Warning: componentWillMount', 'Warning: componentWillReceiveProps', 'Warning: Failed prop type:'])

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigate />
      </Provider>
    );
  }
}
