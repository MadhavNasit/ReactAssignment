/**
 * @format
 */

import { AppRegistry, SwitchIOS } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import SignUp from './app/screens/sign-up/sign-up';

AppRegistry.registerComponent(appName, () => SignUp);
