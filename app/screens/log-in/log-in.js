import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, Keyboard, StatusBar, ScrollView, Alert } from 'react-native';
import SignUpStyle from '../sign-up/sign-up-style';
import { validateEmail, validatePassword } from '../../utils';
import AuthButton from '../../components/auth-button';
import { color } from '../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LogInStyle from './log-in-style';
import AuthHeader from '../../components/auth-header';
import { AuthContext } from '../../navigations/context';
import AsyncStorage from '@react-native-community/async-storage';

const USER_LIST = [];
const LogIn = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { signIn } = useContext(AuthContext);


  useEffect(() => {
    getUserArray();
  }, []);

  // Get User Array from Async Storage
  const getUserArray = async () => {
    const value = await AsyncStorage.getItem('@UserArray');
    let userArray = JSON.parse(value);
    if (userArray != null) {
      userArray.forEach(element => {
        USER_LIST.push(element);
      });
    }
  }

  // Validate Form fields
  const FormValidation = () => {
    Keyboard.dismiss();
    let isEmailError = EmailValidation();
    let isPasswordError = PasswordValidation();

    if (isPasswordError && isEmailError) {
      return true;
    } else {
      return false;
    }
  }

  // Authenticate User from UserList array
  const AuthenticateUser = () => {
    let isFormValidated = FormValidation();
    let userObject;
    console.log('LogIn', USER_LIST);
    if (isFormValidated) {
      userObject = USER_LIST.filter((item) => {
        console.log(password);
        return email.toLowerCase() == item.email && password == item.password;
      });
      console.log('Result', userObject);
      if (userObject.length == 0) {
        console.log('Unsuceesfull!');
        Alert.alert(
          'Invalid Inputs!!',
          'Please enter valid username and password',
        );
      }
      else {
        signIn(userObject[0]);
      }
    }

  }

  // Validate Email
  const EmailValidation = () => {
    let emailData = validateEmail(email);
    setEmailError(emailData);
    if (emailData == "") {
      return true;
    }
    else {
      return false;
    }
  }

  // Validate Password
  const PasswordValidation = () => {
    let passwordData = validatePassword(password);
    setPasswordError(passwordData);
    if (passwordData == "") {
      return true;
    }
    else {
      return false;
    }
  }

  // Form View with TextInputs
  const FormView = () => {
    return (
      <ScrollView>
        <View style={SignUpStyle.formView}>
          <View style={SignUpStyle.inputView}>
            <TextInput
              style={[SignUpStyle.textInput, { borderColor: (emailError == '') ? color.formInputBorder : color.errorText }]}
              placeholder={'Enter Email'}
              placeholderTextColor={color.placeHolder}
              value={email}
              maxLength={60}
              onChangeText={value => setEmail(value)}
              returnKeyType="next"
              onSubmitEditing={() => { this.passwordTextInput.focus(); }}
              blurOnSubmit={false}
            />
            <Text style={SignUpStyle.errorText}>{emailError}</Text>
          </View>

          <View style={SignUpStyle.inputView}>
            <TextInput
              style={[SignUpStyle.textInput, { borderColor: (passwordError == '') ? color.formInputBorder : color.errorText }]}
              placeholder={'Enter Password'}
              placeholderTextColor={color.placeHolder}
              secureTextEntry={true}
              value={password}
              maxLength={16}
              onChangeText={value => setPassword(value)}
              ref={(input) => { this.passwordTextInput = input; }}
              onSubmitEditing={() => { Keyboard.dismiss(); }}
              blurOnSubmit={false}
            />
            <Text style={SignUpStyle.errorText}>{passwordError}</Text>
          </View>
        </View >
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={SignUpStyle.safeAreaView}>
      <StatusBar backgroundColor={color.primary} barStyle="light-content" />
      {/* Header Component */}
      <AuthHeader headingText={'Log In'} />
      <View style={SignUpStyle.mainView}>
        {/* Form view */}
        {FormView()}
        {/* Authentication Submit Button */}
        <AuthButton
          buttonText={'Log In'}
          ValidateFn={() => AuthenticateUser()}
        />

        {/* Forgot password View */}
        <View style={LogInStyle.forgotPasswordView}>
          <TouchableOpacity onPress={() => navigation.push('AuthNavigation', { screen: 'ForgotPassword' })}>
            <Text style={LogInStyle.bottomLink}>{`Forgot your password?`}</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up View */}
        <View style={LogInStyle.createAccountView}>
          <Text style={LogInStyle.signUpText}>{`Don't have an account?`}</Text>
          <TouchableOpacity
            style={LogInStyle.signUpButton}
            onPress={() => navigation.push('AuthNavigation', { screen: 'SignUp' })}>
            <Text style={LogInStyle.signUpLink}>{`Sign UP`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
  );
}



export default LogIn;