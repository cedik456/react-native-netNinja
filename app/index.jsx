import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";
import "../global.css";

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-600 mb-10 text-2xl">Home</Text>
      <View className="flex-row gap-5">
        <Link href="/about" className="underline">
          About Page
        </Link>
        <Link href="/contact" className="underline">
          Contact Page
        </Link>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
