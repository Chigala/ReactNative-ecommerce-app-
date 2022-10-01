import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { View, Text } from "../components/Themed";
import Logo from "../components/svgs/logo";
import { RootStackScreenProps } from "../types";

export default function WelcomeScreen({
  navigation,
}: RootStackScreenProps<"Welcome">) {
  const navigateToTheOtherScreen = () => {
    console.log("I just clicked something");
    navigation.navigate("SocialLoginPage");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/welcome.png")}
        resizeMode="cover"
        style={styles.bgContainer}
      >
        <View style={styles.textContainer}>
          <Logo />
          <View style={styles.textContainer}>
            <Text lightColor="#fff" darkColor="#fff" style={styles.headerText}>
              Welcome to our store
            </Text>
            <Text lightColor="#fff" darkColor="#fff" style={styles.bodyText}>
              Get your groceries in as much as an hour
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToTheOtherScreen}
          >
            <Text style={styles.text}>Get started </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 30,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "transparent",
    marginVertical: 30,
    paddingBottom: 30,
  },
  headerText: {
    fontSize: 42,
    fontWeight: "bold",
    width: "60%",
    textAlign: "center",
  },
  bodyText: {
    fontSize: 12,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#53B175",
    color: "#fff",
    borderRadius: 20,
    fontSize: 20,
    width: "80%",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
