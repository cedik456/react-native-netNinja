import React from "react";

import { styled } from "nativewind";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const StyledIonicons = styled(Ionicons);

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#171717" : "#e8e7ef",
        },
        tabBarActiveTintColor: colorScheme === "dark" ? "#fff" : "#201e2b",
        tabBarInactiveTintColor: colorScheme === "dark" ? "#888" : "#666",
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <StyledIonicons
              name={focused ? "person" : "person-outline"}
              size={24}
              className="text-white"
            />
          ),
        }}
      />
      <Tabs.Screen name="books" options={{ title: "Books" }} />
      <Tabs.Screen name="create" options={{ title: "Create" }} />
    </Tabs>
  );
};

export default DashboardLayout;
