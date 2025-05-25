import { View, Text, TextInput } from "react-native";

import { Link } from "expo-router";
import Button from "../../components/Button";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Login Submitted");
  };

  return (
    <View className="justify-center flex-1 px-6 bg-white">
      <View>
        <Text className="mb-4">Login to your Account</Text>
        <View className="gap-4">
          <TextInput
            className="p-4 border border-gray-300 rounded-md"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <TextInput
            className="p-4 border border-gray-300 rounded-md"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Button className="mb-4" onPress={handleSubmit}>
            Submit
          </Button>
        </View>

        <Text>
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default Login;
