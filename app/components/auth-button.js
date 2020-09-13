import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { color } from '../theme';

const AuthButton = (props) => {
  const { buttonText, ValidateFn } = props;
  return (
    <View style={Styles.buttonView}>
      <TouchableOpacity
        style={Styles.button}
        onPress={() => ValidateFn()}
      >
        <Text style={Styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  // Button View
  buttonView: {
    // flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    backgroundColor: color.white,
  },
  button: {
    backgroundColor: color.button,
    marginHorizontal: 25,
    paddingVertical: 13,
    borderRadius: 60
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default AuthButton;