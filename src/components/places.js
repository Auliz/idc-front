import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getPlaces } from '../actions/places';

class Places extends React.Component {
  componentDidMount() {
    const { latitude, longitude } = this.props.location;

    const uri = `http://api.yelp.com/v3/businesses/search?term=food&latitude=${latitude}&longitude=${longitude}&limit=50&open_now=true`;

    const objReq = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uri),
    };

    fetch('http://0.0.0.0:3000/api/v1/search', objReq)
      .then((resp) => resp.json())
      .then((placesToEat) => {
        setTimeout(() => this.props.logPlaces(placesToEat.businesses), 5000)
        // this.props.logPlaces(placesToEat.businesses)
      })
      .catch(err => console.log(err))
  }

  render() {
    
    return (
      null
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a6a6a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
    location: state.location,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logPlaces: (places) => dispatch(getPlaces(places)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Places);
