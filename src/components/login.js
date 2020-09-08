import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
  Keyboard
} from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../actions/user';
import logo from '../../assets/idc-logo.png';
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const IMAGE_HEIGHT = 200
const IMAGE_HEIGHT_SMALL = 100

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.imageHeight= new Animated.Value(200)
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  handleLogin = () => {
    const user = {username: this.state.username, password: this.state.password}
    this.props.loginUser(user, this.props.navigation);
    this.setState({
      username: '',
      password: '',
    });
  };

  render() {
    return (
      
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
      >
        <Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight, width: this.imageHeight }]} />
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='Username'
            placeholderTextColor='black'
            onChangeText={(text) => this.setState({ username: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder='Password'
            placeholderTextColor='black'
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.handleLogin()}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register')}
        >
          <Text style={styles.registerText}>Not Registered?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
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
  logo: {
    marginBottom: 10,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#9b9b9b',
    borderRadius: 25,
    height: 50,
    marginBottom: 10,
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
    color: 'black'
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user, navigation) => dispatch(loginUser(user, navigation)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
