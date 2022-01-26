import React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import ReelsScreen from "../screens/ReelsScreen";
import ShopScreen from "../screens/ShopScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {
  MaterialCommunityIcons,
  EvilIcons,
  Ionicons,
} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import changeNavigationBarColor, {
    hideNavigationBar,
    showNavigationBar,
  } from 'react-native-navigation-bar-color';
  

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    const setNavigationColor = color => {
        changeNavigationBarColor(color);
      };
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{ backgroundColor: 'black' }}
        activeColor="#fff"
      >
        <Tab.Screen
          name="Home"
          setNavigationColor='blue'
          component={HomeScreen} //Home Screen
          options={{
            headerShown : false,
            backgroundColor : 'black',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen} // Search Screen
          options={{
            headerShown : false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Reels"
          component={ReelsScreen}
          options={{
            headerShown : false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="video-library" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Shop"
          component={ShopScreen}
          options={{
            headerShown : false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="shopping"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen} // Profile Screen
          options={{
            headerShown : false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
