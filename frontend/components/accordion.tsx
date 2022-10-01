import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ItemDataProps } from "../types";
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface PropType {
  item: ItemDataProps;
  title: string;
  id: string;
}

export default function Accordion({ item }: { item: ItemDataProps }) {
  const aref = useAnimatedRef<Animated.View>();
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0)
  );
  const changeHeight = () => {
    if (height.value === 0) {
      runOnUI(() => {
        "worklet";
        height.value = measure(aref).height;
      })();
    }
    open.value = !open.value;
  };
  const height = useSharedValue(0);

  const animatedHeight = useAnimatedStyle(() => {
    return {
      height: height.value * progress.value + 60,
    };
  });

  const findTheOne = (id: string, item: any) => {
    switch (id) {
      case "nutrition":
        return item.nutrition;
    }
  };

  const ListItem = ({ item, title, id }: PropType) => {
    return (
      <TouchableWithoutFeedback onPress={changeHeight}>
        <Animated.View
          ref={aref}
          style={[styles.itemContainer, animatedHeight]}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <FontAwesome name="angle-right" size={24} color="black" />
          </View>
          <Text style={styles.text}>{item.nutrition}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <ListItem {...{ item }} title="Product Details" id="details" />
      <ListItem {...{ item }} title="Nutritions" id="nutrition" />
      <ListItem {...{ item }} title="Review" id="reviewDetails" />

      {/* <View style={styles.itemContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Product Details</Text>
          <FontAwesome name="angle-right" size={24} color="black" />
        </View>
        <Text style={styles.text}>{item.details}</Text>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Product Details</Text>
          <FontAwesome name="angle-right" size={24} color="black" />
        </View>
        <Text style={styles.text}>{item.details}</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  itemContainer: {
    borderTopWidth: 1,
    borderTopColor: "grey",
    paddingVertical: 20,
    height: 60,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    color: "grey",
    fontSize: 12,
    paddingTop: 17,
  },
});
