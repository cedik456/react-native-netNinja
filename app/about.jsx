import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const About = () => {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="mb-10 text-2xl font-bold bold">
        This is the About Page
      </Text>

      <Link href="/" className="underline">
        Go to HomePage
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
