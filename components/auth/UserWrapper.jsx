// for users only

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "expo-router";

const UserWrapper = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user]);

  return { children };
};

export default UserWrapper;

const styles = StyleSheet.create({});
