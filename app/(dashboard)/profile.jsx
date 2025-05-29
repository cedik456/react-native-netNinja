import { View, Text } from "react-native";
import React from "react";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

const Profile = () => {
  const { logout, user } = useAuth();

  return (
    <View className="items-center justify-center flex-1 bg-white">
      <Text className="mb-20">Welcome {user.email}</Text>
      <Text className="mb-20">Time to start reading books</Text>
      <Button onPress={logout}>Logout</Button>
    </View>
  );
};

export default Profile;
