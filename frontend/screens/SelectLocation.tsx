import React, { useCallback, useState } from "react";
import { View, Text } from "../components/Themed";
import { Image, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Button from "../components/button";
import { RootStackScreenProps } from "../types";

export default function SelectLocation({
  navigation,
}: RootStackScreenProps<"SelectLocation">) {
  const [openZone, setOpenZone] = useState<boolean>(false);
  const [openArea, setOpenArea] = useState<boolean>(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { id: 1, label: "Apple", value: "apple" },
    { id: 2, label: "Banana", value: "banana" },
    { id: 3, label: "pineapple", value: "pineapple" },
    { id: 4, label: "mango", value: "mango" },
    { id: 5, label: "strawberry", value: "strawberry" },
    { id: 6, label: "lovefruit", value: "lovefruit" },
  ]);
  const onZoneOpen = useCallback(() => {
    setOpenArea(false);
  }, []);

  const onAreaOpen = useCallback(() => {
    setOpenZone(false);
  }, []);
  const handleNavigate = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <View style={style.container}>
      <View style={style.headerContent}>
        <Image source={require("../assets/images/map-illustration.png")} />
        <View style={style.headerTextContainer}>
          <Text style={style.headerText}>Select Your Location</Text>
          <Text style={style.normalText}>
            Switch on your location to stay in view with what if happening in
            your area{" "}
          </Text>
        </View>
      </View>
      <View >
        <View style={style.zoneDropDown}>
          <Text
            lightColor="#808080"
            darkColor="#fff"
            style={style.dropDownText}
          >
            Your zone
          </Text>
          <DropDownPicker
            placeholder="Select your zone"
            placeholderStyle={{ color: "#808080" }}
            zIndex={9000}
            open={openZone}
            onOpen={onZoneOpen}
            value={value}
            items={items}
            setOpen={setOpenZone}
            setValue={setValue}
            setItems={setItems}
            style={style.dropDown}
          />
        </View>
        <View style={style.areaDropDown}>
          <Text
            lightColor="#808080"
            darkColor="#fff"
            style={style.dropDownText}
          >
            Your Area
          </Text>
          <DropDownPicker
            placeholder="Select your Area"
            placeholderStyle={{ color: "#808080" }}
            open={openArea}
            onOpen={onAreaOpen}
            value={value}
            items={items}
            setOpen={setOpenArea}
            setValue={setValue}
            setItems={setItems}
            style={style.dropDown}
          />
        </View>
          <View style={style.buttonContainer}><Button text="Submit" handleNavigate={handleNavigate} /></View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerContent: {
    paddingVertical: 20,
    alignItems: "center",
  },
  headerTextContainer: {
    alignItems: "center",
    width: "90%",
    marginTop: 40,
  },
  dropDown: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#808080", 
  },
  areaDropDown: {
    paddingVertical: 10,
    zIndex: 100,
  },
  zoneDropDown: {
    paddingVertical: 10,
    zIndex: 200,
  },
  dropDownText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  normalText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
    color: "#A9A9A9",
    fontWeight: "bold",
  },
  buttonContainer: {
    paddingVertical: 30, 
  }, 
});
