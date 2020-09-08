import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Loading extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={(animation) => {
            this.animation = animation;
          }}
          style={{
            width: 400,
            height: 400,
            backgroundColor: '#6a6a6a',
          }}
          source={require('../../assets/loading.json')}
        />
        <Text style={styles.loadingText} >Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#6a6a6a',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 300,
  },
  loadingText: {
    
  }
});
