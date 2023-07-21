import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangeListnerer,
  creatUseDocumentFromAuth,
} from "../utils/firebase/firebase.util";
//actual value you want to access
export const UserContext = createContext({
  curretUser: null,
  setCurrentUser: () => null,
});

//actual component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListnerer((user) => {
      if (user) {
        console.log(user.displayName);
        creatUseDocumentFromAuth(user);
      }

      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
