import React from "react";
import { View, Text } from "../Themed";
import { TouchableWithoutFeedback, Image, StyleSheet } from "react-native";
import { generateRandomColor } from "../../utils/shareFunctions";
import { RootTabScreenProps } from "../../types";

interface CategoryItemProps {
  id: string;
  name: string;
  image: any;
}

const CategoryItemCard = ({
  category,
  navigation,
}: {
  category: CategoryItemProps;
  navigation: RootTabScreenProps<"Explore">["navigation"];
}) => {
  const NavigateToCategory = () => {
    console.log("Navigate to category");
    navigation.navigate("Categories", { name: category.name });
  };
  return (
    <TouchableWithoutFeedback onPress={NavigateToCategory}>
      <View style={[styles.container, generateRandomColor()]}>
        <Image source={category.image} />
        <Text style={styles.text}>{category.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "45%",
    height: 190,
    borderRadius: 20,
    paddingVertical: 10,
    justifyContent: "space-around",
    margin: 5,
    alignItems: "center",
  },
  text: {
    width: "80%",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CategoryItemCard;
