import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text } from "./Themed";

export default function Button({text, handleNavigate}: {text: string, handleNavigate: () => void}) {
  return (
    <TouchableOpacity onPress={handleNavigate}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#53B175",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  }
});
