import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  Animated,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { signUpUser } from '../actions/user';
import logo from '../../assets/idc-logo.png';

const IMAGE_HEIGHT = 200
const IMAGE_HEIGHT_SMALL = 100

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      passwordCheck: '',
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

  handleRegister = () => {
    const { password, passwordCheck } = this.state;
    
    if (password === passwordCheck) {
      const user = {
        username: this.state.username,
        password: this.state.password,
      };

      this.props.signUpUser(user, this.props.navigation);
      this.setState({
        username: '',
        password: '',
        passwordCheck: '',
      });
    } else {
      alert('Passwords did not match, please try again.');
    }
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
          <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder='Confirm Password'
            placeholderTextColor='black'
            onChangeText={(text) => this.setState({ passwordCheck: text })}
            />
            </View>
            
            <TouchableOpacity
            style={styles.registerBtn}
            onPress={() => this.handleRegister()}
            >
            <Text style={styles.loginText}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            >
            <Text style={styles.registerText}>Already registered?</Text>
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
    width: 200,
    height: 200,
    marginBottom: 40,
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
  },
  registerBtn: {
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
    fontWeight: 'bold'
  },
  registerText: {
    color: 'black'
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (user, navigation) => dispatch(signUpUser(user, navigation)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
