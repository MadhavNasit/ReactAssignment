import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../screens/log-in/log-in';
import SignUp from '../screens/sign-up/sign-up';
import ForgotPassword from '../screens/forgot-password/forgot-password';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      headerMode="none"
    >
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;