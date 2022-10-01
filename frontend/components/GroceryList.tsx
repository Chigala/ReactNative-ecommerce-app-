import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  ListRenderItem,
} from "react-native";
import { ItemDataProps } from "../types";
import { itemData } from "../utils/data";
import ItemCard from "./ItemCard";
import { View } from "./Themed";

const GroceryItem = ({ item }: { item: ItemDataProps }) => {
  return <ItemCard item={item} />;
};
export default function GroceryList() {
  const renderItem: ListRenderItem<ItemDataProps> = ({ item }) => (
    <GroceryItem item={item} />
  );
  return (
    <View>
      <FlatList
        data={itemData}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={renderItem}
      />
    </View>
  );
}
