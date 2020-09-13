import React from 'react';
import Styles from './home-style';
import { SafeAreaView, StatusBar, View, Text, Image } from 'react-native';
import CustomHeader from '../../components/custom-header';
import { FlatList } from 'react-native-gesture-handler';

const Data_List = [
  // {title: '', image: '', description: ''},
  { title: 'Our Favourite Beach Holidays with Culture', image: require('../../images/beach-image2.jpg'), description: `The furthest neighbourhood from downtown on the list, The Beach is east along the waterfront. It's well worth the trek, and you can take the Queen streetcar all the way.` },
  { title: 'Our Favourite Beach Holidays with Culture', image: require('../../images/beach-image2.jpg'), description: `The furthest neighbourhood from downtown on the list, The Beach is east along the waterfront. It's well worth the trek, and you can take the Queen streetcar all the way.` },
  { title: 'Our Favourite Beach Holidays with Culture', image: require('../../images/beach-image2.jpg'), description: `The furthest neighbourhood from downtown on the list, The Beach is east along the waterfront. It's well worth the trek, and you can take the Queen streetcar all the way.` },
]
const Home = ({ navigation }) => {

  // Return "Thats All" at Bottom where FlatList Ends
  const FooterView = () => {
    if (!Data_List.length) return null;
    return (
      <View style={Styles.footerView}>
        <Text style={Styles.textFooter}>{`--  That's All  --`}</Text>
      </View>
    );
  }

  // Return View When no item in Arrayz
  const EmptyListComponentView = () => {
    return (
      <View style={Styles.emptyListView}>
        <Text style={Styles.textEmptyList}>Nothing Here..!!</Text>
      </View>
    );
  }

  const renderItem = ({ item, index }) => (
    <View style={Styles.flatListView}>
      <View style={Styles.imageView}>
        <Image
          source={item.image}
          style={Styles.imageFit} />
      </View>
      <View style={Styles.textView}>
        <Text style={Styles.headingText}>{item.title}</Text>
        <Text style={Styles.descText}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <StatusBar barStyle="light-content" />
      <CustomHeader headingText="Home" />
      <View style={Styles.contentView}>
        <FlatList
          data={Data_List}
          renderItem={renderItem}
          contentContainerStyle={{ flexGrow: 1 }}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={EmptyListComponentView()}
          ListFooterComponent={FooterView()}
          extraData={Data_List}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;