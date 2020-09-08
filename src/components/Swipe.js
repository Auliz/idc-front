import React, { Component } from 'react';
import { View } from 'react-native';
import Geolocate from './geoLocate';
import SwipeScreen from './swipescreen';

class Swipe extends Component {

  render() {
    return (
      <View>
        <Geolocate />
        <SwipeScreen />
      </View>
    );
  }
}

export default Swipe;