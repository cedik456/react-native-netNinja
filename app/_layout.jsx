import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView
      className={colorScheme === "dark" ? "dark flex-1" : "flex-1"}
      edges={["top", "left", "right"]}
    >
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colorScheme === "dark" ? "black" : "white",
          },
        }}
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
    </SafeAreaView>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
