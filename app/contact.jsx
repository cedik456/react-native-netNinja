import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Contact = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl">This is the contact page</Text>
      <Link href="/" className="font-bold underline">
        Go back
      </Link>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({});
