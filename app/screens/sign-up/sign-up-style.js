import { StyleSheet } from 'react-native';
import { color } from '../../theme';

const SignUpStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: color.primary
    // justifyContent: 'space-around',
  },
  mainView: {
    flex: 1,
    backgroundColor: color.white,
  },
  formView: {
    // flex: 6,
    paddingTop: 60,
    paddingHorizontal: 25
  },
  // Form View Styles
  inputView: {
    marginBottom: 20,
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
  errorText: {
    color: color.errorText,
    textAlign: 'right',
  },


});

export default SignUpStyle;