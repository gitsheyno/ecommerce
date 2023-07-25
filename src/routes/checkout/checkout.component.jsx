import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
const Checkout = () => {
  const { cartItems, removeItem, totalAmount, addItem } =
    useContext(CartContext);

  const handleDelete = (product) => {
    removeItem(product, true);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((product) => {
        return (
          <CheckOutItem
            key={product.id}
            cartItem={product}
            handleDelete={handleDelete}
            addItem={addItem}
            removeItem={removeItem}
          />
        );
      })}
      <span className="total">Total : {totalAmount}</span>
    </div>
  );
};

export default Checkout;
