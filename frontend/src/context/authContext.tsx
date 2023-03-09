import React, { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "@services/firebase";

const AuthContext = createContext({
  currentUser: {
    displayName: "",
    isLoggedIn: false,
    isSendingRequest: true,
  },
  signup: (email: string, password: string) => Promise,
  login: (email: string, password: string) => Promise,
  logout: (redirectCallback: () => void) => Promise,
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: any): JSX.Element => {
  const [currentUser, setCurrentUser] = useState({
    displayName: "",
    isLoggedIn: false,
    isSendingRequest: true,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(
        user
          ? {
              displayName: user.displayName || "",
              isLoggedIn: true,
              isSendingRequest: false,
            }
          : {
              displayName: "",
              isLoggedIn: false,
              isSendingRequest: false,
            }
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  async function signup(email: string, password: string) {
    await createUserWithEmailAndPassword(auth, email, password);
  }

  async function login(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function logout(redirectCallback: () => void) {
    await signOut(auth);
    redirectCallback();
  }

  return (
    //@ts-ignore
    <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
