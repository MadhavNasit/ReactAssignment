import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { color } from '../theme';

const AuthHeader = (props) => {
  const { headingText } = props;
  return (
    <View style={Styles.headerView}>
      <View style={Styles.headerTextView}>
        <Text style={Styles.headerText}>{headingText}</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  //Header Styles
  headerView: {
    height: 60,
    // paddingTop: 20,
    backgroundColor: color.primary,
  },
  headerTextView: {
    flex: 1,
    justifyContent: 'center',

  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
});

export default AuthHeader;