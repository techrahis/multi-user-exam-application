import React, { useContext, useState } from "react";
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
    if (type === "Institute") {
      const getData = async () => {
        const docRef = doc(db, "institutes", "users");
        const docSnap = await getDoc(docRef);
        setInfo(docSnap.data()[email]);
      };
      getData();
    }
    if (type === "Student") {
      const getData = async () => {
        const docRef = doc(db, "students", "users");
        const docSnap = await getDoc(docRef);
        setInfo(docSnap.data()[email]);
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
  async function checkLogin() {
    const auth = getAuth();
    const user = auth.currentUser;
    let displayName, email;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      displayName = user.displayName;
      email = user.email;
      logIn(email, displayName);
    }
  }
  return (
    <LoginContext.Provider value={{ data, checkLogin, logIn, logOut }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLoginContext() {
  const { data, checkLogin, logIn, logOut } = useContext(LoginContext);
  return { data, checkLogin, logIn, logOut };
}
