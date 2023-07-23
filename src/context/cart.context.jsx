import { createContext, useState } from "react";

export const CartContext = createContext({
  cartIsShown: false,
  setCartIsShown: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const value = {
    cartIsShown,
    setCartIsShown,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
