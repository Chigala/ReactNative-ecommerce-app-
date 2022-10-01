import { StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "./Themed";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const name = "PriceDetailsCard";
const description = "tiny little description";
const quantity = 1;
const price = 1.99;

export default function PriceDetailsCard() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.text}>{description}</Text>
        </View>
        <FontAwesome name="heart-o" color="grey" size={20} />
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.counterContainer}>
          <AntDesign name="minus" size={20} color="grey" />
          <View style={styles.quantityContainer}>
            <Text style={styles.title}>{quantity}</Text>
          </View>
          <AntDesign name="plus" size={20} color="grey" />
        </View>
        <Text style={styles.title}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    paddingHorizontal: 20, 
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  text: {
    fontSize: 12,
    color: "grey",
    paddingTop: 5,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  counterContainer: {
    flex: 0.6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quantityContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
