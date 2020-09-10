import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { color } from '../theme';

const CustomInput = (props, ref) => {
  const { value, placeholder, maxLength, setValueFn, errorMessage, ...rest } = props;
  // console.log(ref);
  return (
    <View>
      <View style={Styles.inputView}>
        <TextInput
          style={[Styles.textInput, { borderColor: (errorMessage == '') ? 'grey' : 'red' }]}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          onChangeText={() => setValueFn()}
          // ref={childRef}
          // forwardedRef={ref}
          // ref={forwardRef}
          // returnKeyType={returnKeyType}
          // onSubmitEditing={() => { this.emailTextInput.focus(); }}
          // blurOnSubmit={false}
          // secureTextEntry={secureTextEntry}
          {...rest}
        />
        <Text style={Styles.errorText}>{errorMessage}</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  // Form View Styles
  inputView: {
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: color.formInputBorder,
    borderRadius: 4,
    borderLeftWidth: 7,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  errorText: {
    color: color.errorText,
    textAlign: 'right',
  },
});

export default CustomInput;