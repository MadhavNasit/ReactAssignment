const { StyleSheet } = require("react-native");
import { color } from '../../theme/index';

const HomeStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: color.primary,
  },
  //Content View
  contentView: {
    flex: 1,
    backgroundColor: color.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingVertical: 20,
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
    marginBottom: 14,
    paddingHorizontal: 20
  },
  // Footer Style
  footerView: {
    flexGrow: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 10,
    marginBottom: 5
  },
  textFooter: {
    fontWeight: 'bold',
    fontSize: 18,
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