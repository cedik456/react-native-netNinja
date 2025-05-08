import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const About = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="bold font-bold mb-10 text-2xl">
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
