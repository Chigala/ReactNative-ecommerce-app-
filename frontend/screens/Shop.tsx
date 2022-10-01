import { Dimensions, ScrollView, Slider, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Logo from "../components/svgs/carrotSvg";
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Carousel from '../components/Carousel';
import ExclusiveOffer from '../components/ExclusiveOffer';
import BestSelling from '../components/BestSelling';
import GroceriesCategory from '../components/GroceriesCategory';
import GroceryList from '../components/GroceryList';


const {width} = Dimensions.get("window");
export default function Shop({ navigation }: RootTabScreenProps<'Shop'>) {
  const colorScheme = useColorScheme(); 
  return (
    <View style={styles.container}>
      <Logo style={styles.logo}/>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <View style={styles.locationContainer}>
          <FontAwesome name='map-marker' size={20} color={Colors[colorScheme].text}/>
          <Text style={styles.locationText}>Lagos,Nigeria</Text>
        </View>
        <SearchBar/>
        <Carousel/>
        <View style={styles.seeAllContainer}>
          <Text style={styles.exclusiveOffer}>Exclusive Offer</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <ExclusiveOffer/>
        <View style={styles.seeAllContainer}>
          <Text style={styles.exclusiveOffer}>Best Selling</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <BestSelling/>
        <View style={styles.seeAllContainer}>
          <Text style={styles.exclusiveOffer}>Groceries</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <GroceriesCategory/>
        <GroceryList/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    paddingHorizontal: 20,
  },
  logo: {
    alignSelf: 'center',
  }, 
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  }, 
  locationText: {
    paddingLeft: 10, 
  }, 
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  seeAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20, 
    alignItems: 'center',
  }, 
  exclusiveOffer: {
    fontSize: 20, 
    fontWeight: "bold", 
  }, 
  seeAll: {
    color: "#53B175", 
  }, 
});
