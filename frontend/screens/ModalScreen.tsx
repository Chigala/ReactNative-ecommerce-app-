import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Text, View } from "../components/Themed";
import Checkbox from "expo-checkbox";
import { brands, categories } from "../utils/data";
import { CategoryDataProps } from "../types";
import Button from "../components/button";
const { width, height } = Dimensions.get("window");

export default function ModalScreen() {
  const [selected, setSelected] = useState<CategoryDataProps[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
  const handleSelectItem = (data: CategoryDataProps) => {
    if (selected.some((item) => item.id === data.id)) {
      setSelected(selected.filter((item) => item.id !== data.id));
    } else {
      setSelected([...selected, data]);
    }
  };
  const handleSelectedBrands = (item: string) => {
    if (selectedBrand.includes(item)) {
      setSelectedBrand(selectedBrand.filter((brand) => brand !== item));
    } else {
      setSelectedBrand([...selectedBrand, item]);
    }
  };
  const handleCheckSelectedBrand = (item: string) => {
    return selectedBrand.includes(item);
  };
  const checkSelected = (id: string) => {
    return selected.some((item) => item.id === id);
  };
  const handleNavigate = () => {
    console.log("navigate");
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.modalContent}>
        <View style={styles.item}>
          <Text style={styles.title}>Category</Text>
          {categories.map((category) => (
            <View key={category.id} style={styles.CheckboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={checkSelected(category.id)}
                onValueChange={() => handleSelectItem(category)}
                color={checkSelected(category.id) ? "#53B175" : undefined}
              />
              <TouchableWithoutFeedback
                onPress={() => handleSelectItem(category)}
              >
                <Text
                  style={[
                    styles.checkboxText,
                    {
                      color: checkSelected(category.id) ? "#53B175" : undefined,
                    },
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableWithoutFeedback>
            </View>
          ))}
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Brands</Text>
          {brands.map((item) => (
            <View key={item} style={styles.CheckboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={handleCheckSelectedBrand(item)}
                onValueChange={() => handleSelectedBrands(item)}
                color={handleCheckSelectedBrand(item) ? "#53B175" : undefined}
              />
              <TouchableWithoutFeedback
                onPress={() => handleSelectedBrands(item)}
              >
                <Text
                  style={[
                    styles.checkboxText,
                    {
                      color: handleCheckSelectedBrand(item)
                        ? "#53B175"
                        : undefined,
                    },
                  ]}
                >
                  {item}
                </Text>
              </TouchableWithoutFeedback>
            </View>
          ))}
        </View>
        <Button text="Apply Filter" handleNavigate={handleNavigate}/>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    // backgroundColor: "#fff",
  },
  modalContent: {
    backgroundColor: "#B1B1B1",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height:height,
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
    paddingBottom: 10,
    color: "#000",
  },
  item: {
    backgroundColor: "transparent",
    paddingBottom: 30,
  },
  CheckboxContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    paddingTop: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
  },
  checkboxText: {
    fontSize: 16,
    paddingLeft: 10,
  },
});
