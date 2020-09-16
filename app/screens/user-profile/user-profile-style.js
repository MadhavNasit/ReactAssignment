import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { color } from '../../theme';

const UserProfileStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: color.primary,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  // Image Logo
  imageLogo: {
    alignSelf: 'center',
    height: 110,
    width: 110,
    marginBottom: -55,
    zIndex: 1,
    borderRadius: 55,
    overflow: 'hidden',
    borderColor: color.primary,
    borderWidth: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageFit: {
    height: '120%',
    width: "120%",
    resizeMode: 'cover',
  },
  //Content View
  contentView: {
    flex: 1,
    backgroundColor: color.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingTop: 80
  },
  // Form View Styles
  inputView: {
    marginBottom: 20,
  },
  labelField: {
    marginBottom: -8,
    marginLeft: 14,
    paddingHorizontal: 5,
    marginRight: 'auto',
    color: color.primary,
    backgroundColor: color.white,
    zIndex: 1,
  },
  textInput: {
    borderWidth: 1,
    textAlign: 'left',
    color: color.text,
    borderColor: color.formInputBorder,
    borderRadius: 4,
    borderLeftWidth: 7,
    paddingHorizontal: 14,
    paddingVertical: 10
  },
  // Button View
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    backgroundColor: color.white,
  },
  button: {
    borderColor: color.primary,
    borderWidth: 1,
    marginHorizontal: 25,
    paddingVertical: 13,
    borderRadius: 60
  },
  buttonText: {
    color: color.primary,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});


export default UserProfileStyle;