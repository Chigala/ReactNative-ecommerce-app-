import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "./Themed";
import { Dimensions, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { ItemDataProps } from "../types";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function ItemCard({ item }: { item: ItemDataProps }) {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const navigateToDetailsPage = () => {
    console.log("navigate to details page");
    navigation.navigate("ProductDetails", {item });
  }
  return (
    <TouchableWithoutFeedback onPress={navigateToDetailsPage}>
        <View style={[styles.item, { borderColor: Colors[colorScheme].tabIconDefault }]}>
          <Image source={item.image} />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price}</Text>
            <View style={styles.iconContainer}>
              <FontAwesome name="plus" color="white" />
            </View>
          </View>
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    paddingVertical: 20,
    width: width * 0.4,
    height: 220,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  iconContainer: {
    borderRadius: 10,
    backgroundColor: "#53B175",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  nameContainer: {},
  name: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  description: {
    paddingBottom: 10,
    color: "#7C7C7C",
    fontSize: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
