import React from "react";
import { View, Text } from "../components/Themed";
import { Dimensions, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ProfileCard from "../components/ProfileCard";
import { accountLayoutItems } from "../utils/data";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
const name = "John Doe";
const email = "chigala11@gmail.com";
export default function Account() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: Colors[colorScheme].background,
        },
      ]}
    >
      <View style={styles.viewContainer}>
        <ProfileCard name={name} email={email} image="" />
        <ScrollView style={styles.scrollContainer} bounces={false}>
          {accountLayoutItems.map((item, index) => (
            <TouchableOpacity style={styles.itemContainer} key={item.id}>
              <View style={styles.titleContainer}>
                <View style={styles.fontContainer}>
                    <FontAwesome
                      size={20}
                      name={item.iconName}
                      color={Colors[colorScheme].text}
                    />
                </View>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <FontAwesome
                size={20}
                name="chevron-right"
                color={Colors[colorScheme].text}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.logoutContainer}>
        <Ionicons style={styles.logoutIcon} name="ios-share-outline" size={24} color="#53B175" />
            <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    paddingTop: 20,
  },
  scrollContainer: {
    flex: 0.8, 
  }, 
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  fontContainer: {
    width: 25, 
  }, 
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: 20,
    fontWeight: "400",
  },
  logoutContainer: {
    marginHorizontal: 20, 
    borderRadius: 20, 
    paddingVertical: 20, 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F3F2",
    

  }, 
  logout: {
    color: "#53B175", 
  }, 
  logoutIcon: {
    transform: [{rotate: "90deg"}], 
    position: "absolute", 
    left: 30, 
    top: 16, 

  }
});
