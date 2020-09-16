import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Keyboard, StatusBar, ScrollView } from 'react-native';
import SignUpStyle from '../sign-up/sign-up-style';
import { validateEmail, validatePassword } from '../../utils';
import AuthButton from '../../components/auth-button';
import { color } from '../../theme';
import CustomHeader from '../../components/auth-header';
import AuthHeader from '../../components/auth-header';

const ForgotPassword = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const FormValidation = () => {
    Keyboard.dismiss();
    let isEmailError = EmailValidation();

    if (isPasswordError) {
      navigation.navigate('AuthNavigation', { screen: 'LogIn' });
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
              onSubmitEditing={() => { Keyboard.dismiss() }}
            />
            <Text style={SignUpStyle.errorText}>{emailError}</Text>
          </View>
        </View >
      </ScrollView>
    );
  }


  return (
    <SafeAreaView style={SignUpStyle.safeAreaView}>
      <StatusBar backgroundColor={color.primary} barStyle="light-content" />
      <AuthHeader headingText={'Forgot Password'} />
      <View style={SignUpStyle.mainView}>
        {FormView()}
        <AuthButton
          buttonText={'Send Mail'}
          ValidateFn={() => FormValidation()} />
      </View>
    </SafeAreaView>
  );
}



export default ForgotPassword;