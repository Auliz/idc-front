import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/login';
import Register from './src/components/register';
import Swipe from "./src/components/Swipe";
import Welcome from "./src/components/welcome";
import Profile from "./src/components/profile";
import { connect } from 'react-redux';

const Stack = createStackNavigator();

class Navigate extends React.Component {
  render() {
    
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login' screenOptions={{ title: "", headerShown: false }}>
          {!this.props.user ?
            
            ( <Fragment>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            </Fragment>)
            
          :
          <Fragment>
            <Stack.Screen name='Swipe' component={Swipe} />
          </Fragment>
          }
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Navigate);