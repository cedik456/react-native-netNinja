import api from "../utils/axiosInstance";
import { createContext, useState } from "react";
import { showError } from "../utils/error";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    try {
      const response = await api.post("/auth/login", { email, password });

      const token = response.data;

      setUser({ email, token });

      return { success: true };
    } catch (error) {
      if (error.response) {
        showError(
          "Login Failed",
          error.response.data.message || "Server error"
        );
        return { success: false, message: error.response.data.message };
      }

      showError(
        "Network Error",
        "Cannot reach the server. Please check your internet connection."
      );
      return {
        success: false,
        message: "Network error",
      };
    }
  }

  async function register(name, email, password) {
    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      const token = response.data;

      setUser({ email, token });
      return { success: true, data: response.data };
    } catch (error) {
      if (error.response) {
        showError(
          "Register Failed",
          error.response.data.message || "Server error"
        );
        return { success: false, message: error.response.data.message };
      }

      showError(
        "Network Error",
        "Cannot reach the server. Please check your internet connection."
      );

      return {
        success: false,
        message: "Network error",
      };
    }
  }

  async function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
