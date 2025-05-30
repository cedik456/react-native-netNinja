import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "expo-router";

const AdminWrapper = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    } else if (user.role !== "admin") {
      router.replace("/unauthorized");
    }
  }, [user]);
  return { children };
};

export default AdminWrapper;

const styles = StyleSheet.create({});
