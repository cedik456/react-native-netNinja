import axios from "axios";
import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    try {
      const response = await axios.post(
        "http://192.168.1.3:3000/api/auth/login",
        { email, password }
      );

      const data = response.data;
      setUser({ email, token: data.token });
      console.log("Login Successfully");
    } catch (error) {
      if (error.response) {
        console.error("Login Failed: ", error.response.data.message);
      } else if (error.request) {
        console.error("No response from server", error.request);
      } else {
        console.log("Error: ", error.message);
      }
    }
  }

  async function register(name, email, password) {
    try {
      const response = await axios.post(
        "http://192.168.1.3:3000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      const data = response.data;
      setUser({ email, token: data.token });
      console.log("Registration Successfully");
    } catch (error) {
      if (error.response) {
        console.error("Registration Failed: ", error.response.data.message);
      } else if (error.request) {
        console.error("No response from server", error.request);
      } else {
        console.log("Error: ", error.message);
      }
    }
  }

  async function logout() {}

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
