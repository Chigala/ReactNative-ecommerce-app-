import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryItemCard from "../components/Explore/CategoryItemCard";
import SearchBar from "../components/SearchBar";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { categories } from "../utils/data";

export default function Explore({ navigation }: RootTabScreenProps<"Explore">) {
  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItemCard navigation={navigation} category={item} />
        )}
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
  },
});
