import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Pressable } from "react-native";
import { View, Text, TextInput } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import { RootStackScreenProps } from "../types";

export default function PhoneLoginPage({navigation}:RootStackScreenProps<"PhoneLoginPage">) {
  const colorScheme = useColorScheme();
  const handleNavigate = () => {
    navigation.navigate("Verification");
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Enter your mobile phone number</Text>
      </View>
      <View style={styles.mobileNumberContainer}>
        <Text style={{ fontSize: 12 }}>Mobile Number</Text>
        <View style={styles.inputFieldContainer}>
          <Image source={require("../assets/images/flag.png")} />
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            darkColor="#fff"
            lightColor="#000"
            returnKeyType="done"
            defaultValue="+234"
          />
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
      <Pressable onPress={handleNavigate} style={styles.actionButton}>
        <FontAwesome
          name="angle-right"
          size={30}
          color={Colors[colorScheme].background}
        />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mobileNumberContainer: {
    marginTop: 20,
  },
  inputFieldContainer: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
    width: "100%",
  },
  input: {
    paddingHorizontal: 10,
    width: "100%",
    height: 40,
  },
  separator: {
    width: "100%",
    height: 2,
  },
  actionButton: {
    position: "absolute",
    top: 350,
    right: 10,
    backgroundColor: "#53B175",
    borderRadius: 100,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
