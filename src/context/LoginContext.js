import React, { createContext, useContext, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export const LoginContext = React.createContext({
  data: null,
  logIn: () => {},
  logOut: () => {},
});

const DATA = { userInfo: {}, loginStatus: false, accountType: "" };

export function LoginContextProvider({ children }) {
  const [Info, setInfo] = useState();
  const [data, setData] = useState(DATA);
  function logIn(email, type) {
    if (type === "institute") {
      const getData = async () => {
        const docRef = doc(db, "institute", "all");
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data()[email]);
        setInfo(docSnap.data()[email]);
      };
      getData();
    }
    if (type === "student") {
      const getData = async () => {
        const docRef = doc(db, "users", email);
        const docSnap = await getDoc(docRef);
        setInfo(docSnap.data());
      };
      getData();
    }

    setData({ userInfo: Info, loginStatus: true, accountType: type });
  }
  function logOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setData({ userInfo: {}, loginStatus: false, accountType: "" });
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <LoginContext.Provider value={{ data, logIn, logOut }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLoginContext() {
  const { data, logIn, logOut } = useContext(LoginContext);
  return { data, logIn, logOut };
}
