import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

const Home = () => {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="mb-10 text-2xl text-black">Home</Text>
      <View className="flex-row items-center gap-5">
        <Link href="/login" className="text-black underline">
          Login Page
        </Link>
        <Link href="/register" className="text-black underline">
          Register Page
        </Link>
        <Link href="/profile" className="text-black underline">
          Profile Page
        </Link>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
