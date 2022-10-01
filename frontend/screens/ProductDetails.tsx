import { StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "../components/Themed";
import PriceDetailsCard from "../components/PriceDetailsCard";
import { RootStackScreenProps } from "../types";
import Accordion from "../components/accordion";

const ProductDetails = ({
  navigation,
  route,
}: RootStackScreenProps<"ProductDetails">) => {
    const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}></View>
      <PriceDetailsCard />
      <Accordion item={item} />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  carouselContainer: {
    flex: 0.4,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "grey",
    
  },
});
