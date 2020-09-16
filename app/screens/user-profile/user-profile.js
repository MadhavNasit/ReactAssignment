import React, { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Styles from './user-profile-style';
import { SafeAreaView, StatusBar, View, Text, Image } from 'react-native';
import CustomHeader from '../../components/custom-header';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { color } from '../../theme/index';
import { AuthContext } from '../../navigations/context';
import { getData } from '../../utils/asyncStorage';

const UserProfile = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const { signOut } = useContext(AuthContext);

  useEffect(() => {
    getData();
  }, []);

  // Get data from Async Storage
  const getData = async () => {
    const value = await AsyncStorage.getItem('@UserData');

    if (value !== null) {
      let userObj = JSON.parse(value);
      setName(userObj.name);
      setEmail(userObj.email);
      setGender(userObj.gender);
      setBirthDate(userObj.birthDate);
    }
  }

  // Editable False TextInput
  const CustomInput = (props) => {
    const { label, value } = props;
    return (
      <View style={Styles.inputView}>
        <Text style={Styles.labelField}>{label}</Text>
        <TextInput
          style={Styles.textInput}
          value={value}
          editable={false}
          selectTextOnFocus={false}
        />
      </View>
    );
  }

  // Logout Button Design
  const LogOut = (props) => {
    const { buttonText } = props;
    return (
      <View style={Styles.buttonView}>
        <TouchableOpacity
          style={Styles.button}
          onPress={() => signOut()}
        >
          <Text style={Styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <StatusBar barStyle="light-content" />
      <CustomHeader headingText="Profile" />
      <View style={Styles.imageLogo}>
        <Image
          source={require('../../images/UserLogo.png')}
          style={Styles.imageFit}></Image>
      </View>
      <View style={Styles.contentView}>
        <CustomInput
          label="Name"
          value={name}
        />
        <CustomInput
          label="Email"
          value={email}
        />
        <CustomInput
          label="Gender"
          value={gender}
        />
        <CustomInput
          label="Date of Birth"
          value={birthDate}
        />
        <LogOut buttonText='Logout' />
      </View>
    </SafeAreaView>
  );
}

export default UserProfile;