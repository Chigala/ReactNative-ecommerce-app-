import React from "react";
import {
  FlatList,
  ListRenderItem,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { generateRandomColor } from "../utils/shareFunctions";
import { View, Text } from "./Themed";

const { width } = Dimensions.get("window");
const data = [
  {
    id: 1,
    name: "banana",
    image: require("../assets/images/food-tray.png"),
    price: 2.99,
    description: "7pcs of banana",
  },
  {
    id: 2,
    name: "banana",
    image: require("../assets/images/food-tray.png"),
    price: 2.99,
    description: "7pcs of banana",
  },
  {
    id: 3,
    name: "banana",
    image: require("../assets/images/food-tray.png"),
    price: 2.99,
    description: "7pcs of banana",
  },
  {
    id: 4,
    name: "banana",
    image: require("../assets/images/food-tray.png"),
    price: 2.99,
    description: "7pcs of banana",
  },
  {
    id: 5,
    name: "banana",
    image: require("../assets/images/food-tray.png"),
    price: 2.99,
    description: "7pcs of banana",
  },
];
interface ExclusiveOfferProps {
  id: number;
  name: string;
  image: any;
  price: number;
  description: string;
}
const CategoryItem = ({ item }: { item: ExclusiveOfferProps }) => {
  return (
    <View style={[styles.item, generateRandomColor()]}>
      <Image source={item.image} style={styles.image} resizeMode="contain"  />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};
export default function GroceriesCategory() {
  const renderItem: ListRenderItem<ExclusiveOfferProps> = ({ item }) => (
    <CategoryItem item={item} />
  );
  return (
    <View>
      <FlatList
      style={styles.container}
        data={data}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
    }, 
  item: {
    paddingVertical: 20,
    backgroundColor: "#F8A44C",
    flexDirection: "row",
    width: width * 0.5,
    height: 100,
    paddingHorizontal: 10,
    marginRight: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "white", 
    paddingLeft: 10,
  },
  image: {
    width: 80,
    height: 80,
  }
});
