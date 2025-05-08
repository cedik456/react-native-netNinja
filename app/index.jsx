import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";
import "../global.css";

const Home = () => {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="mb-10 text-2xl text-red-600">Home</Text>
      <View className="flex-row items-center gap-5">
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
