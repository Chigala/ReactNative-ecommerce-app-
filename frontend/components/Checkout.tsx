import { StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { Text, View } from "./Themed";
import { FontAwesome } from "@expo/vector-icons";
import Button from "./button";
import { BottomSheetRefProps } from "./BottomSheet";

interface checkoutProps {
  total: () => string;
  removeBottomSheet: () => void
}
const Checkout = ({ total,removeBottomSheet }: checkoutProps) => {
  const handleNavigate = () => {
    console.log("navigate");
  };
  const closeBottomSheet = () => {
    removeBottomSheet()
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Checkout</Text>
        <Pressable onPress={closeBottomSheet}>
          <FontAwesome name="remove" size={30} color="black" />
        </Pressable>
      </View>
      <View>
        <View style={styles.checkoutContentContainer}>
          <Text style={styles.title}>Delivery</Text>
          <View style={styles.itemsContainer}>
            <Text style={styles.items}>Select Method</Text>
            <FontAwesome name="angle-right" size={25} color="black" />
          </View>
        </View>
        <View style={styles.checkoutContentContainer}>
          <Text style={styles.title}>Payment</Text>
          <View style={styles.itemsContainer}>
            <Image
              style={styles.image}
              source={require("../assets/images/flag.png")}
            />
            <FontAwesome name="angle-right" size={25} color="black" />
          </View>
        </View>
        <View style={styles.checkoutContentContainer}>
          <Text style={styles.title}>Promo Code</Text>
          <View style={styles.itemsContainer}>
            <Text style={styles.items}>Pick discount</Text>
            <FontAwesome name="angle-right" size={25} color="black" />
          </View>
        </View>
        <View style={styles.checkoutContentContainer}>
          <Text style={styles.title}>Total Cost</Text>
          <View style={styles.itemsContainer}>
            <Text style={styles.items}>{total()}</Text>
            <FontAwesome name="angle-right" size={25} color="black" />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>
          By placing an order, you agree to our Terms of Use and Privacy Policy.
        </Text>
      </View>
      <Button text="Place order" handleNavigate={handleNavigate} />
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  header: {
    fontSize: 17,
    fontWeight: "700",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  checkoutContentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  title: {
    color: "grey",
    fontSize: 14,
  },
  itemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  items: {
    fontSize: 14,
    fontWeight: "700",
    marginRight: 10,
  },
  footer: {
    width: "90%",
    paddingTop: 10,
    paddingBottom: 60,
  },
});
