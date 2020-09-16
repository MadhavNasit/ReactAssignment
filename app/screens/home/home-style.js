const { StyleSheet, StatusBar } = require("react-native");
import { color } from '../../theme/index';

const HomeStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: color.primary,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  //Content View
  contentView: {
    flex: 1,
    backgroundColor: color.background,
    // paddingVertical: 10,
    paddingHorizontal: 10
  },
  imageView: {
    height: 250,
    width: '100%',
    marginBottom: 10,
  },
  imageFit: {
    height: '100%',
    width: "100%",
    borderRadius: 10,
    resizeMode: 'cover',
    overflow: 'hidden'
  },
  textView: {
    paddingHorizontal: 4,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginBottom: 2,
  },
  descText: {
    textAlign: 'justify'
  },
  flatListView: {
    marginVertical: 7,
    borderRadius: 4,
    padding: 14,
    backgroundColor: color.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  //Empty list View Style
  emptyListView: {
    flex: 1,
    justifyContent: 'center',
  },
  textEmptyList: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center'
  }
});

export default HomeStyle;