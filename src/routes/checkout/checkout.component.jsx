import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearItem } from "../../store/cart/cart.reducer";
import {
  selectCartItems,
  selectCartQuantity,
} from "../../store/cart/cart.selector";
import PaymentForm from "../../components/payment-form/payment-form.component";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartQuantity);
  const dispatch = useDispatch();
  const handleDelete = (product) => {
    dispatch(clearItem(product));
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
      <PaymentForm />
    </div>
  );
};

export default Checkout;
