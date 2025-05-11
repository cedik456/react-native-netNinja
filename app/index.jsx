import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

const Home = () => {
  return (
    <View className="items-center justify-center flex-1 dark:bg-[#212121]">
      <Text className="mb-10 text-2xl text-red-600 dark:text-white">Home</Text>
      <View className="flex-row items-center gap-5">
        <Link href="/login" className="underline dark:text-white">
          Login Page
        </Link>
        <Link href="/register" className="underline dark:text-white">
          Register Page
        </Link>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
