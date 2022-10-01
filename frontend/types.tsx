/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Welcome: undefined;
  SocialLoginPage:undefined; 
  PhoneLoginPage: undefined;
  Verification: undefined;
  SelectLocation: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  Categories: {name: string};
  ProductDetails: {item: ItemDataProps};
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Shop: undefined;
  Cart: undefined;
  Explore: undefined;
  Favorites: undefined;
  Account: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export interface ItemDataProps {
  id: string;
  name: string;
  image: any;
  price: number;
  description: string;
  details: string;
  rating: number;
  nutrition: string;
  reviewDetails: string;
  calories: string;
}
export interface CategoryDataProps {
  id: string;
  name: string;
  image: any;
}
export interface CartItemDataProps {
  id: string;
  name: string;
  image: any;
  price: number;
  description: string;
  quantity: number;

}
export interface AccountLayoutItemProps {
  iconName: keyof typeof FontAwesome.glyphMap;
  title: string; 
  id: string; 
}
