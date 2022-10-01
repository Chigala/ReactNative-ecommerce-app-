import React, { useState } from "react";
import { View, Text, TextInput } from "../components/Themed";
import PageLogo from "../components/svgs/carrotSvg";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../components/button";
import { RootStackScreenProps } from "../types";
import { useHeaderHeight } from "@react-navigation/elements";

export default function SignupScreen({
  navigation,
}: RootStackScreenProps<"SignUpScreen">) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const height = useHeaderHeight();
  const colorScheme = useColorScheme();
  const handleNavigate = () => {
    console.log("it was clicked");
    navigation.navigate("Root");
  };
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "height" : "height"}
        keyboardVerticalOffset={height + 47}
        enabled
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.logo}>
            <PageLogo />
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.form}>
              <View style={styles.formContent}>
                <Text style={styles.headerText}>Sign up</Text>
                <Text style={styles.title}>
                  Enter your credentials to continue
                </Text>
              </View>
              <View style={styles.formContent}>
                <Text style={styles.text}>username</Text>
                <TextInput
                  darkColor="#fff"
                  placeholderTextColor="#000"
                  lightColor="#000"
                  style={styles.input}
                  defaultValue="chigala"
                />
              </View>
              <View style={styles.formContent}>
                <Text style={styles.text}>email</Text>
                <TextInput
                  darkColor="#fff"
                  placeholderTextColor="#000"
                  lightColor="#000"
                  style={styles.input}
                  defaultValue="chigala@gmail.com"
                />
              </View>
              <View style={styles.formContent}>
                <Text style={styles.text}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.input}
                    darkColor="#fff"
                    lightColor="#000"
                    secureTextEntry={showPassword}
                    defaultValue="123456"
                  />
                  {showPassword ? (
                    <FontAwesome
                      onPress={handlePasswordVisibility}
                      style={styles.icon}
                      color={Colors[colorScheme].text}
                      name="eye"
                      size={20}
                    />
                  ) : (
                    <FontAwesome
                      onPress={handlePasswordVisibility}
                      style={styles.icon}
                      name="eye-slash"
                      color={Colors[colorScheme].text}
                      size={20}
                    />
                  )}
                </View>
              </View>
              <View style={styles.aggrementContainer}>
                <Text style={styles.termsOfServiceContainer}>
                  By continuing you agree to our
                  <Text style={styles.terms}> Terms of service </Text>
                  and
                  <Text style={styles.terms}> Privacy Policy </Text>
                </Text>
              </View>
              <Button text="Sign Up" handleNavigate={handleNavigate} />
              <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account? </Text>
                <TouchableOpacity>
                  <Text style={styles.footerTextSignUp}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
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
    fontWeight: "bold",
    paddingTop: 10,
    color: "#A9A9A9",
  },
  logo: {
    alignSelf: "center",
  },
  form: {
    marginTop: 50,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#A9A9A9",
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
  termsOfService: {
    paddingVertical: 30,
  },
  terms: {
    color: "#53B175",
    fontSize: 10,
    marginTop: 10,
  },
  termsOfServiceContainer: {
    fontSize: 10,
  },
  aggrementContainer: {
    paddingTop: 10,
    paddingBottom: 20,
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
