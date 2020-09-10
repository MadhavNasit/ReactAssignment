import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { color } from '../theme';

const PickerSelect = (props) => {
  const { value, selectedValue, listOfItems, placeholder, errorMessage } = props;
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      borderWidth: 1,
      borderColor: (errorMessage == '' ? color.formInputBorder : color.errorText),
      borderRadius: 4,
      borderLeftWidth: 7,
      textAlign: 'left',
      paddingHorizontal: 12,
      paddingVertical: 10
    },
    inputAndroid: {
      borderWidth: 1,
      borderColor: (errorMessage == '' ? color.formInputBorder : color.errorText),
      borderRadius: 4,
      borderLeftWidth: 7,
      textAlign: 'left',
      paddingHorizontal: 14,
      paddingVertical: 10,
      color: color.black
    },
    errorText: {
      color: color.errorText,
      textAlign: 'right',
    },
    inputView: {
      marginBottom: 20,
    },
  });
  return (
    <View style={pickerSelectStyles.inputView}>
      <RNPickerSelect
        style={pickerSelectStyles}
        value={value}
        onValueChange={(value) => { selectedValue(value) }}
        items={listOfItems}
        placeholder={placeholder}
        useNativeAndroidPickerStyle={false}
      />
      <Text style={pickerSelectStyles.errorText}>{errorMessage}</Text>
    </View>
  );

}

export default PickerSelect;