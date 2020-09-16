import AsyncStorage from '@react-native-community/async-storage';
import UserProfile from '../screens/user-profile/user-profile';

//Set data in Async Storage
const storeData = async (value, token) => {
  const JsonValue = JSON.stringify(value);
  const userData = ['@UserData', JsonValue];
  const tokenData = ['@Token', JSON.stringify(token)];

  await AsyncStorage.multiSet([userData, tokenData]);
}

// Clear data from Async Storage
const ClearAsyncStorage = async () => {
  const keys = ['@UserData', '@Token']
  await AsyncStorage.multiRemove(keys);
}

export { storeData, ClearAsyncStorage };