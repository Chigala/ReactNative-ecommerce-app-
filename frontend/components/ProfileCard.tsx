import { StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "./Themed";

const imageContainerWidth = 50;
interface ProfileCardProps {
  email: string;
  name: string;
  image: any | undefined;
}
const ProfileCard: React.FC<ProfileCardProps> = ({ email, name, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}></View>
      <View style={styles.textContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{name}</Text>
          <Text style={styles.text}>{email}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  textContainer: {
    marginLeft: 15,
  },
  imageContainer: {
    width: imageContainerWidth,
    height: imageContainerWidth,
    borderRadius: imageContainerWidth / 2,
    borderWidth: 1,
    borderColor: "grey",
  },
  image: {
    resizeMode: "contain",
  },
  header: {},
  headerText: {
    fontSize: 17,
    fontWight: "bold",
    textTransform: "uppercase",
  },
  text: {
    color: "grey",
    paddingTop: 5,
  },
});
