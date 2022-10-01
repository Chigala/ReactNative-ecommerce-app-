import React from "react";
import { View } from "../components/Themed";
import { StyleSheet, FlatList } from "react-native";
import { itemData } from "../utils/data";
import ItemCard from "../components/ItemCard";

export default function Categories() {
  return (
    <View style={styles.container}>
      <FlatList
        data={itemData}
        renderItem={({ item }) => <ItemCard item={item} />}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
