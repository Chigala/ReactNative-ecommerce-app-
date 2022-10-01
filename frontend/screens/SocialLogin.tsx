import React from "react";
import { View, Text } from "../components/Themed";
import { Image, Pressable,TouchableOpacity,  StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";

export default function SocialLoginPage({navigation}:RootStackScreenProps<"SocialLoginPage">) {

    const handleNavigate = () => {
        navigation.navigate("PhoneLoginPage");
    }

  return (

    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Get your groceries with nectar</Text>
        </View>
        <View style={styles.countryContainer}>
          <Image source={require("../assets/images/flag.png")} />
          <Text style={styles.countryItems}>+324</Text>
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Or connect with social media</Text>
      </View>
        <TouchableOpacity style={styles.googleButton} onPress={handleNavigate}>
          <FontAwesome
            style={styles.icon}
            name="google"
            size={30}
            color="white"
          />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton}>
          <FontAwesome
            style={styles.icon}
            name="facebook"
            size={30}
            color="white"
          />
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 150,
    paddingLeft: 20,
    width: "100%",
  },
  headerContainer: {
    width: "70%",
  },
  contentContainer: {
    width: "100%",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  countryItems: {
    paddingLeft: 10,
  },
  separator: {
    width: "100%",
    height: 1,
    marginTop: 20,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    paddingTop: 20,
  },
  googleButton: {
    backgroundColor: "#5383EC",
    flexDirection: "row",
    width: "90%",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: "center",
    marginVertical: 20,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold", 
    color: "white",
  },
  facebookButton: {
    backgroundColor: "#4A66AC",
    flexDirection: "row",
    width: "90%",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: "center",
    alignSelf: "center",
  },
  icon: {
    paddingRight: 30,
  },
});
