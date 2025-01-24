import React, { createContext, useContext, useState, useEffect } from "react";
import { useFetchUserQuery } from "../features/user/userApi";
import { useDispatch } from "react-redux";
import { logOut, setCredentials } from "../features/auth/authSlice";

interface AuthContextType {
  user: any;
  token: string | null;
  setToken: (token: string | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const dispatch = useDispatch();

  const { data: user } = useFetchUserQuery(undefined, {
    skip: !token,
  });
  console.log(user)
  useEffect(() => {
    console.log(token)
    if (token) {
      if (user) {
        dispatch(setCredentials({ user, token }));
      }
    } else {
      dispatch(logOut());
    }
  }, [token, user, dispatch]);

  const logout = () => {
    setToken(null);
    dispatch(logOut());
  };

  return (
    <AuthContext.Provider value={{ user, token, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
