import React, { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, Image, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import DotContainer from "./DotContainer";
import CarouselItem from "./DotContainer";
import { View } from "./Themed";

const { width, height } = Dimensions.get("window");
export default function Carousel() {
  const interval = useRef<NodeJS.Timeout>();
  const data = [
    {
      id: 1,
      title: "Fruits",
      image: require("../assets/images/banner-image.png"),
    },
    {
      id: 2,
      title: "Vegetables",
      image: require("../assets/images/banner-image.png"),
    },
    {
      id: 3,
      title: "Meat",
      image: require("../assets/images/banner-image.png"),
    },
  ];

  useEffect(() => {
    interval.current = setInterval(() => {
      moveCarousel();
    }, 2000);
    return () => {
      clearInterval(interval.current);
    };
  });

  const translateX = useSharedValue(0);
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / width);
  }, [translateX]);
  const moveCarousel = useCallback(() => {
    if (activeIndex.value === data.length - 1) {
      translateX.value = 0;
    }
    if (activeIndex.value === 0) {
      scrollRef.current?.scrollTo({ x: 0, animated: false });
    }
    scrollRef.current?.scrollTo({
      x: width * (activeIndex.value + 1),
      animated: true,
    });
  }, []);
  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x;
    },
  });

  return (
    <Animated.ScrollView
      style={styles.carousel}
      horizontal
      ref={scrollRef as any}
      pagingEnabled
      scrollEventThrottle={16}
      onScroll={handleScroll}
      showsHorizontalScrollIndicator={false}
    >
      {data.map((item, index) => {
        return (
          <Animated.View key={item.id} style={[styles.carousel]}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.dotContainer}>
              {data.map((item, index) => {
                return (
                  <DotContainer
                    key={item.id}
                    index={index}
                    activeIndex={activeIndex}
                  />
                );
              })}
            </View>
          </Animated.View>
        );
      })}
    </Animated.ScrollView>
  );
}
const styles = StyleSheet.create({
  carousel: {
    width: width,
    position: "relative",
  },
  image: {
    resizeMode: "contain",
  },

  dotContainer: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "transparent",
  },
});
