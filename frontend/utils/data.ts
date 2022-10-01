import { AccountLayoutItemProps, ItemDataProps } from './../types';
export const itemData: ItemDataProps[] = [
  {
    id: "1",
    name: "banana",
    image: require("../assets/images/food-tray.png"),
    price: 2.99,
    description: "7pcs of banana",
    details: "Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.",
    rating: 4.5,
    nutrition: "Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.",
    reviewDetails: "It was really nice and I almost ate the whole thing", 
    calories: "100kcals",

 
    
  },
  {
    id: "2",
    name: "banana",
    image: require("../assets/images/food-tray.png"),
    price: 2.99,
    description: "7pcs of banana",
    details: "Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.",
    rating: 4.5,
    nutrition: "Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.",
    reviewDetails: "It was really nice and I almost ate the whole thing", 
    calories: "100kcals",


  },
  {
    id: "3",
    name: "banana",
    image: require("../assets/images/food-tray.png"),
    price: 2.99,
    description: "7pcs of banana",
    details: "Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.",
    rating: 4.5,
    nutrition: "Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.",
    reviewDetails: "It was really nice and I almost ate the whole thing", 
    calories: "100kcals",

  },
  {
    id: "4",
    name: "banana",
    image: require("../assets/images/food-tray.png"),
    price: 2.99,
    description: "7pcs of banana",
    details: "Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.",
    rating: 4.5,
    nutrition: "Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.",
    reviewDetails: "It was really nice and I almost ate the whole thing", 
    calories: "100kcals",

  },
  {
    id: "5",
    name: "banana",
    image: require("../assets/images/food-tray.png"),
    price: 2.99,
    description: "7pcs of banana",
    details: "Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.",
    rating: 4.5,
    nutrition: "Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.",
    reviewDetails: "It was really nice and I almost ate the whole thing", 
    calories: "100kcals",

  },
];

export const categories = [
  { id: "1", name: "Fruits", image: require("../assets/images/drinks.png") },
  {
    id: "2",
    name: "Vegetables",
    image: require("../assets/images/drinks.png"),
  },
  { id: "3", name: "Meat", image: require("../assets/images/drinks.png") },
  { id: "4", name: "Fish", image: require("../assets/images/drinks.png") },
  { id: "5", name: "Dairy", image: require("../assets/images/drinks.png") },
  { id: "6", name: "Bakery", image: require("../assets/images/drinks.png") },
  { id: "7", name: "Drinks", image: require("../assets/images/drinks.png") },
  { id: "8", name: "Snacks", image: require("../assets/images/drinks.png") },
  { id: "9", name: "Frozen", image: require("../assets/images/drinks.png") },
  { id: "10", name: "Canned", image: require("../assets/images/drinks.png") },
];
export const brands = [
  "fish",
  "meat",
  "dairy",
  "bakery",
  "drinks",
  "snacks",
  "frozen",
  "canned",
];
export const cartData = [
  {
    id: "1",
    name: "banana",

    price: 2.99,
    description: "7pcs of banana",
    quantity: 1,
    image: require("../assets/images/banana.png"),
  },
  {
    id: "2",
    name: "apple",

    price: 3.99,
    description: "6pcs of apple",
    quantity: 1,
    image: require("../assets/images/banana.png"),
  },
  {
    id: "3",
    name: "orange",

    price: 3.99,
    description: "7pcs of banana",
    quantity: 1,
    image: require("../assets/images/banana.png"),
  },
  {
    id: "4",
    name: "mango",

    price: 9.99,
    description: "7pcs of banana",
    quantity: 1,
    image: require("../assets/images/banana.png"),
  },
  {
    id: "5",
    name: "strawberry",

    price: 11.99,
    description: "7pcs of banana",
    quantity: 1,
    image: require("../assets/images/banana.png"),
  },
  {
    id: "6",
    name: "citrus",

    price: 2.99,
    description: "7pcs of banana",
    quantity: 1,
    image: require("../assets/images/banana.png"),
  },
];

export const accountLayoutItems: AccountLayoutItemProps[] = [
    {
        id: "1", 
        iconName: "shopping-bag", 
        title: "Orders", 
    }, 
    {
        id: "2", 
        iconName: "address-card-o", 
        title: "My details", 
    }, 
    {
        id: "3", 
        iconName: "location-arrow", 
        title: "Delivery Address", 
    }, 
    {
        id: "4", 
        iconName: "credit-card", 
        title: "Payment Method", 
    }, 
    {
        id: "5", 
        iconName: "gift", 
        title: "promo card", 
    }, 
    {
        id: "6", 
        iconName: "bell-o", 
        title: "notification", 
    }, 
    {
        id: "7", 
        iconName: "question-circle-o", 
        title: "help ", 
    }, 
    {
        id: "8", 
        iconName: "exclamation", 
        title: "about", 
    }, 

]