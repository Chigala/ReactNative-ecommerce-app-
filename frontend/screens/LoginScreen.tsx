import React, { useState } from "react";
import { View, Text, TextInput } from "../components/Themed";
import PageLogo from "../components/svgs/carrotSvg";
import { StyleSheet, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../components/button";
import { RootStackScreenProps } from "../types";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export default function LoginScreen({navigation}: RootStackScreenProps<"LoginScreen">) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const colorScheme = useColorScheme();
  const handleNavigate = () => {
    console.log("it was clicked");
  };
  const handleNavigateToSignUp = () => {
    navigation.navigate("SignUpScreen");
  }
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <PageLogo />
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          <View style={styles.formContent}>
            <Text style={styles.headerText}>Logging In </Text>
            <Text style={styles.title}>Enter Your Email and Password</Text>
          </View>
          <View style={styles.formContent}>
            <Text style={styles.text}>Email</Text>
            <TextInput
              darkColor="#fff"
              placeholderTextColor={Colors[colorScheme].text}
              lightColor="#000"
              style={styles.input}
              placeholder="abcdef@gmail.com"
            />
            </View>
          <View style={styles.formContent}>
            <Text style={styles.text}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                darkColor="#fff"
                placeholderTextColor={Colors[colorScheme].text}
                lightColor="#000"
                secureTextEntry={showPassword}
                placeholder="12345"
              />
              {showPassword ? (
                <FontAwesome
                  onPress={handlePasswordVisibility}
                  style={styles.icon}
                  name="eye"
                  size={20}
                />
              ) : (
                <FontAwesome
                  onPress={handlePasswordVisibility}
                  style={styles.icon}
                  name="eye-slash"
                  size={20}
                />
              )}
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <Button text="Log in" handleNavigate={handleNavigate} />
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={handleNavigateToSignUp}>
              <Text style={styles.footerTextSignUp}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
  title: {
    fontSize: 12,
    paddingTop: 10,
    color: "#A9A9A9",
    fontWeight: "bold",
  },
  logo: {
    alignSelf: "center",
  },
  form: {
    marginTop: 50,
  },
  text: {
    fontSize: 12,
    color: "#A9A9A9",
    fontWeight: "bold",
  },
  formContent: {
    paddingTop: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#A9A9A9",
  },
  passwordContainer: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    right: 0,
    bottom: 15,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    paddingVertical: 15,
    fontSize: 10,
  },
  footer: {
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  footerText: {
    fontSize: 12,
  },
  footerTextSignUp: {
    color: "#53B175",
    fontSize: 12,
  },
});
