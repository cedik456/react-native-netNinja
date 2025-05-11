import { View, Text } from "react-native";

import { Link } from "expo-router";

const Login = () => {
  return (
    <View className="items-center justify-center flex-1">
      <View className="gap-10">
        <Text>Login to your Account</Text>
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
