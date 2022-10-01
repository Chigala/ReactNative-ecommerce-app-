import React from "react";
import {
  FlatList,
  ListRenderItem,
} from "react-native";
import { ItemDataProps } from "../types";
import { itemData } from "../utils/data";
import ItemCard from "./ItemCard";
import { View, Text } from "./Themed";

const BestSellingItems = ({ item }: { item: ItemDataProps }) => {
  return <ItemCard item={item} />;
};
export default function BestSelling() {
  const renderItem: ListRenderItem<ItemDataProps> = ({ item }) => (
    <BestSellingItems item={item} />
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
