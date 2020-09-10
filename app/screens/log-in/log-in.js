import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Keyboard, StatusBar, ScrollView } from 'react-native';
import SignUpStyle from '../sign-up/sign-up-style';
import AuthHeader from '../../components/auth-header';
import { validateEmail, validatePassword } from '../../utils';
import AuthButton from '../../components/auth-button';
import { color } from '../../theme';

const LogIn = () => {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const FormValidation = () => {
    Keyboard.dismiss();
    let isEmailError = EmailValidation();
    let isPasswordError = PasswordValidation();

    if (isPasswordError && isEmailError) {
      console.log("Sucess!");
    }
  }

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
              ref={(input) => { this.emailTextInput = input; }}
              onSubmitEditing={() => { Keyboard.dismiss() }}
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
              onSubmitEditing={() => { this.confPasswordTextInput.focus(); }}
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
      <StatusBar translucent barStyle="light-content" />
      <View style={SignUpStyle.mainView}>
        <AuthHeader headingText={'Log In'} />
        {FormView()}
        <AuthButton
          buttonText={'Log In'}
          ValidateFn={() => FormValidation()} />
      </View>
    </SafeAreaView>
  );
}



export default LogIn;