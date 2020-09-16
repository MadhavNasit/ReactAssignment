import React from 'react';
import { View, Text, StyleSheet, ViewStyle, Image, StatusBar } from 'react-native';
import { color } from '../theme';
import { useRoute, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { icons } from '../icons/index';

const AuthHeader = (props) => {
  const { headingText } = props;
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <>
      <View style={Styles.headerView}>
        <View style={Styles.innerView}>
          <View style={Styles.backButtonView}>
            {route.name != 'LogIn' ?
              <TouchableOpacity
                onPress={() => navigation.goBack()}
              >
                <Image source={icons.back} style={Styles.icon} />
              </TouchableOpacity>
              : <View></View>}
          </View>
          <View style={Styles.headerTextView}>
            <Text
              style={Styles.headerText}
              numberOfLines={1}
            >
              {headingText}
            </Text>
          </View>
          <View style={Styles.thirdView}></View>
        </View>
      </View>
      <View style={Styles.imageLogo}>
        <Image
          source={require('../images/UserLogo.png')}
          style={Styles.imageFit}></Image>
      </View>
    </>
  );
}

const Styles = StyleSheet.create({
  //Header Styles
  headerView: {
    height: 50,
    backgroundColor: color.primary,
    // paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    // flexDirection: 'row'
    // alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 'auto',
    tintColor: color.white
  },
  headerTextView: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  thirdView: {
    flex: 1,
  },
  innerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonView: {
    flex: 1,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: color.headerText,
  },
  imageLogo: {
    alignSelf: 'center',
    height: 110,
    width: 110,
    marginBottom: -55,
    zIndex: 1,
    borderRadius: 55,
    overflow: 'hidden',
    borderColor: color.primary,
    borderWidth: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageFit: {
    height: '120%',
    width: "120%",
    resizeMode: 'cover',
  },
});

export default AuthHeader;