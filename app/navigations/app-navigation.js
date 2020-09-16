import * as React from 'react';
import Home from '../screens/home/home';
import { icons } from '../icons/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image } from 'react-native';
import { color } from 'react-native-reanimated';
import UserProfile from '../screens/user-profile/user-profile';

const Tab = createBottomTabNavigator();
const tabItem = (screen, stack, source) => {
  return (
    <Tab.Screen
      options={{
        tabBarIcon: ({ focused }) => tabIcon(focused, source),
        unmountOnBlur: true
      }}
      name={screen}
      component={stack}
    />
  );
};
function tabIcon(focused, source) {
  return (
    <View style={[TAB_VIEW, focused]}>
      <Image style={focused ? TAB_ICON : INACTIVE_TAB_ICON} source={source} />
    </View>
  );
}
const TAB_ICON = {
  height: 25,
  width: 25,
  tintColor: '#fff'
};
const INACTIVE_TAB_ICON = {
  ...TAB_ICON,
  tintColor: '#999999'
};
const TAB_VIEW = {
  minWidth: "100%",
  justifyContent: 'center',
  flex: 1,
  alignItems: 'center',
  height: 35,
  paddingTop: 5
};

const AppNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#0000ff',
          borderTopColor: 'gray',
          borderTopWidth: 1
        },
        labelStyle: {
          fontSize: 12
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#999999',
        // activeBackgroundColor: '#0000ff',
        // inactiveBackgroundColor: '#0d6e69'
      }}>
      {tabItem('Home', Home, icons.home)}
      {tabItem('Profile', UserProfile, icons.profile)}
    </Tab.Navigator>
  );
}

export default AppNavigation;