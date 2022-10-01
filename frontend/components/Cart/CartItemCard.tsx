import { FontAwesome } from "@expo/vector-icons";
import React  from "react";
import { View, Text } from "../Themed";
import { StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
import { CartItemDataProps } from "../../types";

interface CartItemCardProps {
  item: CartItemDataProps;
  handleRemove: (id: string) => void;
  incrementCartItem: (id: string) => void;
  decrementCartItem: (id: string) => void;
}
export default function CartItemCard({
  item,
  handleRemove,
  decrementCartItem,
  incrementCartItem,

}: CartItemCardProps) {
  const getTotalPrice = (price: number, quantity: number) => {
    return (price * quantity).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => decrementCartItem(item.id)}
            style={styles.quantityButton}
          >
            <FontAwesome name="minus" color="#7C7C7C" size={20} />
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => incrementCartItem(item.id)}
            style={styles.quantityButton}
          >
            <FontAwesome name="plus" size={20} color="#53B175" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Pressable onPress={() => handleRemove(item.id)}>
          <FontAwesome name="remove" size={20} />
        </Pressable>
        <Text style={styles.price}>
          {getTotalPrice(item.price, item.quantity)}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomColor: "#7C7C7C",
    borderBottomWidth: 1,
    height: 130,
  },
  imageContainer: {
    flex: 0.3,
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  detailsContainer: {
    flex: 0.8,
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontSize: 12,
    color: "#7C7C7C",
    paddingTop: 3,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 35,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#7C7C7C",
    marginRight: 15,
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 15,
  },
  priceContainer: {
    flex: 0.3,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
