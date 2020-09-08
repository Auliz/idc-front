import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { connect } from 'react-redux';
import { logLocation } from '../actions/location';
import Places from './places';


class Geolocate extends React.Component {
  state = {
    latitude: '',
    longitude: '',
    errorMsg: '',
    locationGot: null,
  };

  componentDidMount() {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      const located = await Location.getCurrentPositionAsync({});

      const location = {
        latitude: located.coords.latitude,
        longitude: located.coords.longitude,
      };

      this.props.logLocation(location);

      this.setState({
        locationGot: true,
      });


    })();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.locationGot ? <Places /> : null}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    logLocation: (location) => dispatch(logLocation(location)),
  };
};

export default connect(null, mapDispatchToProps)(Geolocate);
