import React, { useCallback, useRef, useState } from "react";
import { View, Text } from "../components/Themed";
import { StyleSheet, FlatList, Dimensions } from "react-native";
import { cartData } from "../utils/data";
import CartItemCard from "../components/Cart/CartItemCard";
import { CartItemDataProps } from "../types";
import Button from "../components/button";
import BottomSheet, { BottomSheetRefProps } from "../components/BottomSheet";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Checkbox from "expo-checkbox";
import Checkout from "../components/Checkout";

const { width, height } = Dimensions.get("window");
const initialHeight = -height + 200;
export default function Cart() {
  const [data, setData] = useState<CartItemDataProps[]>(cartData);
  const ref = useRef<BottomSheetRefProps>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
      setShowOverlay(prev => !prev);
      
    } else {
      ref?.current?.scrollTo(initialHeight);
      setShowOverlay(prev => !prev);
    }
  }, []);
  const getTotal = () => {
    let total = 0;
    data.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };
  const handleNavigate = () => {
    console.log("Navigate to checkout");
  };
  const removeCartItem = (id: string) => {
    if (!cartData) return;
    const newCartData = data.filter((item) => item.id !== id);
    setData(newCartData);
  };
  const incrementCartItem = (id: string) => {
    if (!cartData) return;
    const newCartData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setData(newCartData);
  };
  const decrementCartItem = (id: string) => {
    if (!cartData) return;
    const newCartData = data.map((item) => {
      if (item.id === id) {
        if (item.quantity === 1) return item;
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setData(newCartData);
  };

//   const animatedStyles = useAnimatedStyle(() => {
//     const opacity = withTiming(animatedOpacity.value, { duration: 500 });

//     return {
//         opacity, 
//     };
//   });

  return (
    <View style={[styles.container]}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CartItemCard
                handleRemove={removeCartItem}
                decrementCartItem={decrementCartItem}
                incrementCartItem={incrementCartItem}
                item={item}
              />
            )}
          />
          {
            showOverlay && <View style={styles.overlay} />
          }
      <View style={styles.buttonContainer}>
        {/* <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: ${getTotal()}</Text>
        </View> */}
        <Button handleNavigate={onPress} text="Go To Checkout" />
      </View>
        <BottomSheet setShowOverlay={setShowOverlay} ref={ref}>
        <Checkout total={getTotal} removeBottomSheet={onPress}/>
        </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    margin: 20,
  },
  totalContainer: {
    alignItems: "center",
    textAlign: "center",
    padding: 10,
    top: 20,
    right: 20,
    backgroundColor: "black",
  },
  totalText: {
    color: "white",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: initialHeight,  
    backgroundColor: "black", 
    opacity: 0.5,
  },
});
