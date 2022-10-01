import React from "react";
import { TextInput, View } from "./Themed";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search Store" placeholderTextColor="#A9A9A9" />
      <FontAwesome name="search" size={25} color="#A9A9A9" style={styles.icon} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  searchBar: {
    borderRadius: 50,
    paddingVertical: 15,
    paddingLeft: 50,
    paddingRight: 10,
    backgroundColor: "#F2F3F2",
    position: "relative",
    marginVertical: 10, 
  },
  icon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
});
