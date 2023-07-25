import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cartIsShown: false,
  setCartIsShown: () => {},
  cartItems: [],
  addItem: () => {},
  totalItems: 0,
  setTotalItems: () => {},
  removeItem: () => {},
  totalAmount: 0,
  setTotalAmount: () => {},
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

const removeFromCart = (cartItems, productToRemove, condition) => {
  const existingProduct = cartItems.find(
    (product) => product.id === productToRemove.id
  );

  let updatedItems = [];

  if (existingProduct.quantity !== 1 && condition == false) {
    updatedItems = cartItems.map((product) => {
      return productToRemove.id === product.id
        ? {
            ...product,
            quantity: product.quantity - 1,
          }
        : product;
    });

    return updatedItems;
  }

  updatedItems = cartItems.filter((product) => {
    return product.id !== productToRemove.id;
  });

  return updatedItems;
};
export const CartProvider = ({ children }) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const itemQuantities = cartItems.reduce((prev, product) => {
      return prev + product.quantity;
    }, 0);
    setTotalItems(itemQuantities);

    const totalAmount = cartItems.reduce((acc, prev) => {
      return prev.price * prev.quantity + acc;
    }, 0);
    setTotalAmount(totalAmount);
  }, [cartItems]);

  const addItem = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItem = (productToRemove, condition = false) => {
    setCartItems(removeFromCart(cartItems, productToRemove, condition));
  };

  const value = {
    cartIsShown,
    setCartIsShown,
    addItem,
    cartItems,
    totalItems,
    removeItem,
    totalAmount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
