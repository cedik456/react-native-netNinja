import React from "react";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "../../hooks/useAuth";

const AuthLayout = () => {
  const { user } = useAuth();

  console.log(user);

  if (user) {
    return <Redirect href="/(dashboard)/profile" />;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </>
  );
};

export default AuthLayout;
