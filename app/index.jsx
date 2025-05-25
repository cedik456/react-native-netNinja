import { StyleSheet, Text, View } from "react-native";
import { Link, Redirect } from "expo-router";
import React from "react";

const Home = () => {
  return <Redirect href="/(auth)/login" />;
};

export default Home;

const styles = StyleSheet.create({});
