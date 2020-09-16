import { StyleSheet, StatusBar } from 'react-native';
import { color } from '../../theme';

const SignUpStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: color.primary,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    // justifyContent: 'space-around',
  },
  mainView: {
    flex: 1,
    backgroundColor: color.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
    paddingTop: 50
  },
  formView: {
    paddingTop: 30,
    paddingHorizontal: 25,
    backgroundColor: color.white,
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
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

});

export default SignUpStyle;