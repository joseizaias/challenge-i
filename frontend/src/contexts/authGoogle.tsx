import { useState, useEffect, useContext, createContext, ReactNode } from 'react';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import { IGoogleContext, ISignInInput, IUser, AuthProviderProps, TResearchers } from "../interfaces/IGoogleContext";

export const AuthGoogleContext = createContext({} as IGoogleContext);

export const AuthGoogleProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [userData, setUserData] = useState<TResearchers>([]);

  let navigate = useNavigate();

  const clearUserData = () => {
    setUserData([]);
  }

  const handleSignOut = () => {
    setUser(null);
    navigate("/", { replace: true });
  }

  const handleSignIn = async (token: string) => {
    const UserObj : IUser = jwt_decode(token)

    setUser(UserObj);

    const userInformation = await axios.post(`http://localhost:3333/users/`, {
      token
    });

    const userData : TResearchers = userInformation.data;

    setUserData(userData);

    navigate("/home", { replace: true });
  }

  return (
    <AuthGoogleContext.Provider value={{ user, userData, clearUserData, handleSignOut, handleSignIn }}>
      {children}
    </AuthGoogleContext.Provider>
  )

}

export const useAuth = () => useContext(AuthGoogleContext);
