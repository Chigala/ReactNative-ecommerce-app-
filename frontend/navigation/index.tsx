/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import PhoneLoginPage from "../screens/PhoneLoginPage";
import SocialLoginPage from "../screens/SocialLogin";
import WelcomeScreen from "../screens/WelcomeScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import Verification from "../screens/Verification";
import SelectLocation from "../screens/SelectLocation";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import Shop from "../screens/Shop";
import Explore from "../screens/Explore";
import Favorites from "../screens/Favorites";
import Cart from "../screens/Cart";
import Account from "../screens/Account";
import Categories from "../screens/Categories";
import ProductDetails from "../screens/ProductDetails";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const colorScheme = useColorScheme();
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SocialLoginPage"
        component={SocialLoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PhoneLoginPage"
        component={PhoneLoginPage}
        options={({ navigation }) => ({
          headerTitle: " ",
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable style={{ width: 20 }}>
              <FontAwesome
                name="angle-left"
                size={40}
                color={Colors[colorScheme].text}
                onPress={() => navigation.goBack()}
              />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={({ navigation }) => ({
          headerTitle: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable style={{ width: 20 }}>
              <FontAwesome
                name="angle-left"
                size={40}
                color={Colors[colorScheme].text}
                onPress={() => navigation.goBack()}
              />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="SelectLocation"
        component={SelectLocation}
        options={({ navigation }) => ({
          headerTitle: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable style={{ width: 20 }}>
              <FontAwesome
                name="angle-left"
                size={40}
                color={Colors[colorScheme].text}
                onPress={() => navigation.goBack()}
              />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable style={{ width: 20 }}>
              <FontAwesome
                name="angle-left"
                size={40}
                color={Colors[colorScheme].text}
                onPress={() => navigation.goBack()}
              />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignupScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable style={{ width: 20 }}>
              <FontAwesome
                name="angle-left"
                size={40}
                color={Colors[colorScheme].text}
                onPress={() => navigation.goBack()}
              />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={({ navigation, route }) => ({
          title: route.params.name,
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable style={{ width: 20 }}>
              <FontAwesome
                name="angle-left"
                size={40}
                color={Colors[colorScheme].text}
                onPress={() => navigation.goBack()}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable style={{ width: 20 }}>
              <FontAwesome
                name="filter"
                size={20}
                color={Colors[colorScheme].text}
                onPress={() => navigation.navigate("Modal")}
              />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({ navigation, route }) => ({
          title: route.params.name,
          headerLeft: () => (
            <Pressable style={{ width: 20 }}>
              <FontAwesome
                name="angle-left"
                size={40}
                color={Colors[colorScheme].text}
                onPress={() => navigation.goBack()}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable style={{ width: 20 }}>
              <Feather
                name="share"
                size={20}
                color={Colors[colorScheme].text}
              />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "fullScreenModal" }}>
        <Stack.Screen
          name="Modal"
          options={({ navigation }) => ({
            headerShadowVisible: false,
            title: "Modal",
            headerLeft: () => (
              <Pressable style={{ width: 20 }}>
                <MaterialCommunityIcons
                  name="close"
                  size={25}
                  color={Colors[colorScheme].text}
                  onPress={() => navigation.goBack()}
                />
              </Pressable>
            ),
          })}
          component={ModalScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Shop"
        component={Shop}
        options={({ navigation }: RootTabScreenProps<"Shop">) => ({
          title: "Shop",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="shopping-bag" color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Explore"
        component={Explore}
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="search-plus" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="shopping-cart" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: "Favorite",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: 0 }} {...props} />;
}
