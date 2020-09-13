/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import SignUp from './app/screens/sign-up/sign-up';
import LogIn from './app/screens/log-in/log-in';
import AuthNavigation from './app/navigations/auth-navigation';
import Home from './app/screens/home/home';
import AppNavigation from './app/navigations/app-navigation';

AppRegistry.registerComponent(appName, () => AppNavigation);
