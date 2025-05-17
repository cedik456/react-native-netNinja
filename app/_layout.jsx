import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";

const RootLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <View className="flex-1">
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === "dark" ? "#171717" : "#e8e7ef",
          },
          headerTintColor: colorScheme === "dark" ? "#fff" : "#201e2b",
        }}
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
