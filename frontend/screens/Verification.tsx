import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {  Image, Pressable, StyleSheet } from "react-native";
import { View, Text, TextInput } from "../components/Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { RootStackScreenProps } from "../types";

export default function Verification({
  navigation,
}: RootStackScreenProps<"Verification">) {
  const colorScheme = useColorScheme();
  const handleNavigate = () => {
    navigation.navigate("SelectLocation");
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Enter your 4-digit code </Text>
      </View>
      <View style={styles.mobileNumberContainer}>
        <Text style={styles.code}>Code</Text>
        <View style={styles.inputFieldContainer}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            darkColor="#fff"
            lightColor="#000"
            returnKeyType="done"
            placeholder="- - - -"
            placeholderTextColor={Colors[colorScheme].text}
          />
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
      <View style={styles.resendCodeContainer}>
        <Text style={styles.resendCode}>Resend code</Text>
        <Pressable onPress={handleNavigate} style={styles.actionButton}>
          <FontAwesome
            name="angle-right"
            size={30}
            color={Colors[colorScheme].background}
          />
        </Pressable>
      </View>
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
    marginTop: 30,
  },
  inputFieldContainer: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "flex-start",
    width: "100%",
  },
  input: {
    width: "100%",
    height: 20,
  },
  separator: {
    width: "100%",
    height: 2,
  },
  resendCodeContainer: {
    position: "absolute",
    top: 350,
    right: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  resendCode: {
    color: "#53B175",
  },
  actionButton: {
    backgroundColor: "#53B175",
    borderRadius: 100,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  code: {
    fontSize: 13,
  },
});
