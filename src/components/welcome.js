import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import logo from '../../assets/idc-logo.png';

class Login extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Welcome to IDC!</Text>
        <Text>For all those "I don't care" moments</Text>
        <Text>
          We use your device location in order to find restaurants that are near
          you. Location is required for this app to function properly.
        </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a6a6a',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#9b9b9b',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
    // fontWeight: 'bold'
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#ffde00',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'black',
    fontWeight: 'bold',
  },
  registerText: {
    color: 'black',
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Login);
