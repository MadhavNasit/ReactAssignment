import { StyleSheet } from 'react-native';
import { color } from '../../theme';

const LogInStyle = StyleSheet.create({
  // Forgot Password
  forgotPasswordView: {
    alignItems: 'center',
    marginBottom: 14,
  },
  bottomLink: {
    color: color.primary
  },
  // Create new account
  createAccountView: {
    marginVertical: 18,
    // alignSelf: 'center',
    // alignItems: 'center',
  },
  signUpText: {
    color: color.primary,
    alignSelf: 'center',
    marginBottom: 4,
  },
  signUpButton: {
    marginHorizontal: 25,
    paddingVertical: 13,
    borderRadius: 60,
    borderColor: color.primary,
    borderWidth: 2
  },
  signUpLink: {
    color: color.primary,
    alignSelf: 'center'
  }
});

export default LogInStyle;