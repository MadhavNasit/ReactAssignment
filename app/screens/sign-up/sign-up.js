import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, Keyboard, StatusBar, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SignUpStyle from './sign-up-style';
import { validateName, validateEmail, validatePassword, validateSelect, validateDate } from '../../utils';
import AuthButton from '../../components/auth-button';
import PickerSelect from '../../components/picker-select';
import DateSelect from '../../components/date-picker';
import { color } from '../../theme';
import AuthHeader from '../../components/auth-header';
import { AuthContext } from '../../navigations/context';

const Gender_List = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  }
];

const EMAIL_LIST = [];
const SignUp = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthDateError, setBirthDateError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const { signUp } = useContext(AuthContext);

  useEffect(() => {
    getEmailArray();
  }, []);

  // Get User Array from Async Storage
  const getEmailArray = async () => {
    const value = await AsyncStorage.getItem('@UserArray');
    let userArray = JSON.parse(value);
    if (userArray != null) {
      userArray.forEach(element => {
        EMAIL_LIST.push(element);
      });
    }
  }

  // placeholder for select
  const placeholder = {
    label: 'Select a gender...',
    value: '',
    color: '#9EA0A4',
  };

  // SignUp form Validation
  const FormValidation = () => {
    Keyboard.dismiss();
    let isNameError = NameValidation();
    let isEmailError = EmailValidation();
    let isPasswordError = PasswordValidation();
    let isGenderError = GenderValidation();
    let isBirthDateError = BirthDateValidation();
    let isPasswordMatchError = MatchPassword();
    if (isNameError && isPasswordError && isEmailError && isGenderError && isBirthDateError && isPasswordMatchError) {
      return true;
    } else {
      return false;
    }
  }

  // Check conditions on Submit for email
  const onSubmit = () => {
    let validation = FormValidation();
    let emailLowerCase = email.toLowerCase();
    if (validation) {
      console.log('EmailArray', EMAIL_LIST);
      let checkEmail = EMAIL_LIST.filter((item) => {
        return emailLowerCase == item.email;
      });
      console.log('checkEmail', checkEmail);
      if (checkEmail.length != 0) {
        Alert.alert(
          'Email already Registered..!!',
          'please LogIn or Create Account with different Email',
        );
      }
      else {
        let userObj = { name: userName, email: emailLowerCase, gender: gender, birthDate: birthDate, password: password };
        updateArr(userObj);
        signUp(userObj);
      }
    }
  }

  // Set new object to @UserArray async Storage
  const updateArr = async (newObject) => {
    let array = [];
    let oldObjects = JSON.parse(await AsyncStorage.getItem('@UserArray'));
    console.log('oldObject', oldObjects);
    if (oldObjects != null) {
      oldObjects.forEach(element => {
        array.push(element);
      })
      console.log('ArrayInLoop', array);
    }
    array.push(newObject);
    console.log('Array', array);
    await AsyncStorage.setItem('@UserArray', JSON.stringify(array));
  }

  // Validate Name 
  const NameValidation = () => {
    let nameData = validateName(userName);
    setUserNameError(nameData);
    if (nameData == "") {
      return true;
    }
    else {
      return false;
    }
  }

  // Validate Email Field
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

  // Validate Password Field
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

  // Validate Gender Field
  const GenderValidation = () => {
    let genderData = validateSelect(gender);
    setGenderError(genderData);
    if (genderData == "") {
      return true;
    }
    else {
      return false;
    }
  }

  // Validate Date field
  const BirthDateValidation = () => {
    let birthDateData = validateDate(birthDate);
    setBirthDateError(birthDateData);
    if (birthDateData == "") {
      return true;
    }
    else {
      return false;
    }
  }

  // Match Password and Confirm Password
  const MatchPassword = () => {
    if (confirmPassword == '') {
      setConfirmPasswordError("Please enter password.");
      return false;
    }
    else if ((password.localeCompare(confirmPassword)) != 0) {
      setConfirmPasswordError("Please enter correct password.");
      return false;
    }
    else {
      setConfirmPasswordError("");
      return true;
    }
  }

  // Form for SignUp with TextImputs
  const FormView = () => {
    return (
      <ScrollView>
        <View style={SignUpStyle.formView}>
          <View style={SignUpStyle.inputView}>
            <TextInput
              style={[SignUpStyle.textInput, { borderColor: (userNameError == '') ? 'grey' : 'red' }]}
              placeholder={'Full Name'}
              placeholderTextColor={color.placeHolder}
              value={userName}
              maxLength={40}
              onChangeText={value => setUserName(value)}
              returnKeyType="next"
              onSubmitEditing={() => { this.emailTextInput.focus(); }}
              blurOnSubmit={false}
            />
            <Text style={SignUpStyle.errorText}>{userNameError}</Text>
          </View>

          <View style={SignUpStyle.inputView}>
            <TextInput
              style={[SignUpStyle.textInput, { borderColor: (emailError == '') ? 'grey' : 'red' }]}
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

          <PickerSelect
            value={gender}
            selectedValue={(value) => setGender(value)}
            placeholder={placeholder}
            listOfItems={Gender_List}
            errorMessage={genderError}
          />

          <DateSelect
            placeholder={'Select BirthDate'}
            value={birthDate}
            dateFormat={'YYYY-MM-DD'}
            setDateFn={(date) => { setBirthDate(date) }}
            errorMessage={birthDateError}
          />

          <View style={SignUpStyle.inputView}>
            <TextInput
              style={[SignUpStyle.textInput, { borderColor: (passwordError == '') ? 'grey' : 'red' }]}
              placeholder={'Enter Password'}
              placeholderTextColor={color.placeHolder}
              secureTextEntry={true}
              value={password}
              maxLength={16}
              onChangeText={value => setPassword(value)}
              returnKeyType="next"
              onSubmitEditing={() => { this.confPasswordTextInput.focus(); }}
              blurOnSubmit={false}
            />
            <Text style={SignUpStyle.errorText}>{passwordError}</Text>
          </View>

          <View style={SignUpStyle.inputView}>
            <TextInput
              style={[SignUpStyle.textInput, { borderColor: (confirmPasswordError == '') ? 'grey' : 'red' }]}
              placeholder={'Confirm Password'}
              placeholderTextColor={color.placeHolder}
              secureTextEntry={true}
              value={confirmPassword}
              maxLength={16}
              onChangeText={value => setConfirmPassword(value)}
              ref={(input) => { this.confPasswordTextInput = input; }}
            />
            <Text style={SignUpStyle.errorText}>{confirmPasswordError}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }


  return (
    <SafeAreaView style={SignUpStyle.safeAreaView}>
      <StatusBar backgroundColor={color.primary} barStyle="light-content" />
      {/* Header Section */}
      <AuthHeader headingText={'Sign Up'} />
      <View style={SignUpStyle.mainView}>
        {FormView()}
        {/* submit button for SignUp */}
        <AuthButton
          buttonText={'Create User'}
          ValidateFn={onSubmit} />
      </View>
    </SafeAreaView>
  );
}



export default SignUp;