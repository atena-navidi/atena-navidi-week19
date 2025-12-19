import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { loginApi, registerApi } from "../api/auth.service";


const decodeToken = (token) => {
  try {
    const payload = token.split(".")[1];
    const decoded = JSON.parse(atob(payload));
    return decoded;
  } catch {
    return null;
  }
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      localStorage.removeItem("user");
      return null;
    }
  });

  const login = async (credentials) => {
    const res = await loginApi(credentials);
    const { token } = res.data;

    const decoded = decodeToken(token);
    if (!decoded) throw new Error("Invalid token");

    const minimalUser = {
      id: decoded.id,
      username: decoded.username,
    };

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(minimalUser));

    setUser(minimalUser);
    return minimalUser;
  };

  const register = async (data) => {
    const res = await registerApi(data);
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
