// import { createContext, useState, useEffect, useReducer } from "react";

// //actual value you want to access
// export const UserContext = createContext({
//   curretUser: null,
//   setCurrentUser: () => null,
// });

// //actual component
// export const UserProvider = ({ children }) => {
//   // const [currentUser, setCurrentUser] = useState(null);

//   // const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
//   // const { currentUser } = state;

//   // const setCurrentUser = (user) => {
//   //   dispatch({ type: "SET_CURRENT_USER", payload: user });
//   // };
//   // const value = { currentUser, setCurrentUser };

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };

// /*

// consr reducerFunction = (state , action)=>{
//   return{
//     currentUser : null
//   }
// }

// */
