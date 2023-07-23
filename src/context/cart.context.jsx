import { createContext, useState, useEffect } from "react";
import CartItem from "../components/cart-item/cart-item.component";

export const CartContext = createContext({
  cartIsShown: false,
  setCartIsShown: () => {},
  cartItems: [],
  addItem: () => {},
  totalAmount: "",
});

const addCartItem = (cartItems, productToAdd) => {
  // Check if the product exists in cartItems
  const existingProduct = cartItems.find(
    (product) => product.id === productToAdd.id
  );
  let res = [];
  if (existingProduct) {
    // If the product exists, update its quantity
    res = cartItems.map((product) =>
      product.id === productToAdd.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  } else {
    // If the product doesn't exist, add a new product with quantity 1
    res = [...cartItems, { ...productToAdd, quantity: 1 }];
  }
  return res;
};

export const CartProvider = ({ children }) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const itemQuantities = cartItems.reduce((prev, product) => {
      return prev + product.quantity;
    }, 0);
    setTotalAmount(itemQuantities);
  }, [cartItems]);

  const addItem = (productToAdd) => {
    console.log("clicked", productToAdd);
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  console.log(cartItems);
  const value = {
    cartIsShown,
    setCartIsShown,
    addItem,
    cartItems,
    totalAmount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
