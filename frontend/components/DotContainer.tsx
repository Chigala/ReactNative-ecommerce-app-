import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, { Extrapolate, interpolate, SharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { View } from "./Themed";

interface DotProps {
    index: number;
    activeIndex: SharedValue<number>;
}
export default function DotContainer({activeIndex,index }: DotProps) {
    const animatedStyles = useAnimatedStyle(() => {
      const active = activeIndex.value === index;
    return {
      width: withTiming(active? 20: 7 , {duration: 200}),
      backgroundColor: withTiming(active ? "green": "grey",   {duration: 200}),
    };
  });
  return <Animated.View key={index} style={[styles.dot,animatedStyles ]} />;
}

const styles = StyleSheet.create({
    dot: {
    height: 7,
    borderRadius: 5,
    backgroundColor: "grey",
    marginHorizontal: 5,
    }
})