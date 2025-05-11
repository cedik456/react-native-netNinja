import { View, Text } from "react-native";

import { Link } from "expo-router";
import Button from "../../components/Button";

const Login = () => {
  //   const [isSubmitting, setIsSubmitting] = useState(false);

  //   const handleSubmit = () => {
  //     setIsSubmitting(true);
  //     console.log("Register form submitted");

  //     setTimeout(() => {
  //       setIsSubmitting(false);
  //     }, 2000);
  //   };

  const handleSubmit = () => {
    console.log("Login Submitted");
  };

  return (
    <View className="items-center justify-center flex-1">
      <View className="gap-10">
        <Text>Login to your Account</Text>

        <Button onPress={handleSubmit}>Submit</Button>
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
