import React from "react";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#e8e7ef" : "#171717",
        },
        tabBarActiveTintColor: colorScheme === "dark" ? "#201e2b" : "#fff",
        tabBarInactiveTintColor: colorScheme === "dark" ? "#888" : "#666",
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              className="text-white"
              color="white"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="books"
        options={{
          title: "Books",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "book" : "book-outline"}
              size={24}
              color="white"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "create" : "create-outline"}
              size={24}
              color="white"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
