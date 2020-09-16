import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { color } from '../theme';

const DateSelect = (props) => {
  const { value, placeholder, dateFormat, setDateFn, errorMessage } = props;
  return (
    <View style={Styles.inputView}>
      <DatePicker
        style={{ width: '100%' }}
        date={value}
        mode="date"
        placeholder={placeholder}
        format={dateFormat}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            right: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            borderWidth: 1,
            height: (Platform.OS != 'ios' ? 50 : '100%'),
            borderColor: (errorMessage == '' ? color.formInputBorder : color.errorText),
            borderRadius: 4,
            borderLeftWidth: 7,
            paddingHorizontal: (Platform.OS == 'ios' ? 12 : 8),
            textAlign: 'left',
            paddingVertical: 8,
            alignItems: 'flex-start',
          },
          datePicker: {
            backgroundColor: color.placeHolder,
          },
          btnTextConfirm: {
            color: color.primary,
          }
        }}
        onDateChange={(date) => { setDateFn(date) }}
      />
      <Text style={Styles.errorText}>{errorMessage}</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  inputView: {
    marginBottom: 20,
  },
  errorText: {
    color: color.errorText,
    textAlign: 'right',
  },
});

export default DateSelect;