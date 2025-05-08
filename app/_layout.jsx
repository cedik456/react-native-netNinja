import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <View className={colorScheme === "dark" ? "dark flex-1" : "flex-1"}>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === "dark" ? "#171717" : "#e8e7ef",
          },
          headerTintColor: colorScheme === "dark" ? "#fff" : "#201e2b",
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen name="contact" options={{ title: "Contact" }} />
      </Stack>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
