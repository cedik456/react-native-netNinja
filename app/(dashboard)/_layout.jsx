import React from "react";
import { useColorScheme } from "react-native";
import { Ionicons, Feather, Fon } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { useAuth } from "../../hooks/useAuth";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();

  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/login" />;
  }
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
