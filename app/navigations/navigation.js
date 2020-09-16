import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import AuthNavigation from './auth-navigation';
import AppNavigation from './app-navigation';
import { AuthContext } from './context';
import { storeData, ClearAsyncStorage } from '../utils';

const Stack = createStackNavigator();

const Navigation = () => {

  const [userToken, setUserToken] = React.useState();

  const authContext = React.useMemo(() => {
    return {
      signIn: (results) => {
        let token = 'SignIn-Dummy-Token';
        storeData(results, token);
        setUserToken(token);
      },
      signUp: (userObj) => {
        let token = 'SignUp-Dummy-Token';
        storeData(userObj, token);
        setUserToken(token);
      },
      signOut: () => {
        ClearAsyncStorage();
        setUserToken(null);
      }
    };

  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          headerMode="none"
        >
          {userToken == null ? (
            <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
          )
            :
            (
              <Stack.Screen name="AppNavigation" component={AppNavigation} />
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default Navigation;