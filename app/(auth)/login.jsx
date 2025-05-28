import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { Link, useRouter } from "expo-router";
import Button from "../../components/Button";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { showError } from "../../utils/error";

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      showError("Email and password are required.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      showError("Please enter a valid email address.");
      return;
    }

    const result = await login(email, password);
    console.log("Login Result:", result);

    if (result.success) {
      router.replace("/(dashboard)/profile");
    } else {
      showError("Login failed", result.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              keyboardType="email-address"
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
    </TouchableWithoutFeedback>
  );
};

export default Login;
