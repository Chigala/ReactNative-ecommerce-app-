import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import ItemCard from "./ItemCard";
import { View } from "./Themed";
import { itemData } from "../utils/data";
import { ItemDataProps } from "../types";

const ExclusiveOfferItems = ({ item }: { item: ItemDataProps }) => {
  return <ItemCard item={item} />;
};
export default function ExclusiveOffer() {
  const renderItem: ListRenderItem<ItemDataProps> = ({ item }) => (
    <ExclusiveOfferItems item={item} />
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
