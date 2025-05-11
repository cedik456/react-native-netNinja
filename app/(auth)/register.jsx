import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Register = () => {
  return (
    <View className="items-center justify-center flex-1">
      <Text>Register</Text>
      <Text>
        Already have an account? <Link href="/login">Login here</Link>
      </Text>
    </View>
  );
};

export default Register;
