import { createContext, useState } from "react";
import SHOP_DATA from "../shopdata.json";

export const ShopContext = createContext({
  currentShopData: [],
});

export const ShopProvider = ({ children }) => {
  const [currentShopData, setCurrentShopData] = useState(SHOP_DATA);

  const value = {
    currentShopData,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
