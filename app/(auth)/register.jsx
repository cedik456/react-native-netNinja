import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
  const { register } = useAuth();
  const router = useRouter();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = async () => {
    try {
      await register(name, email, password);
      router.push("/(dashboard)/profile");
    } catch (error) {
      console.log("Registration Failed: ", error.message);
    }
  };

  return (
    <View className="items-center justify-center flex-1">
      <Text>Register now</Text>
      <View className="gap-4">
        <TextInput
          className="p-4 border border-gray-300 rounded-md"
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          className="p-4 border border-gray-300 rounded-md"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          className="p-4 border border-gray-300 rounded-md"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        <Button className="mb-4" onPress={handleSubmit}></Button>
      </View>
      <Text>
        Already have an account? <Link href="/login">Login here</Link>
      </Text>
    </View>
  );
};

export default Register;
