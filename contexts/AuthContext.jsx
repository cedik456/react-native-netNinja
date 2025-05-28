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
      const errorMessage =
        error.response?.data.error || "An unexpected error occurred.";
      showError("Login Failed", errorMessage);
      return {
        success: false,
        message: errorMessage,
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
      const errorMessage =
        error.response?.data.message || "An unexpected error occurred.";
      showError("Registration Failed", errorMessage);
      return { success: false, message: errorMessage };
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
