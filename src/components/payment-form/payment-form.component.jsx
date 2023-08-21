import "./payment-form.styles.scss";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartQuantity } from "../../store/cart/cart.selector";
import { selectUserSelector } from "../../store/user/user.selector";
const PaymentForm = () => {
  const [proccesingPayment, setProccesingPayment] = useState(false);
  const stripe = useStripe();
  const element = useElements();
  const amount = useSelector(selectCartQuantity);
  const currentUser = useSelector(selectUserSelector);
  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !element) {
      return;
    }

    setProccesingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    console.log(response);
    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: element.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "guest",
        },
      },
    });
    setProccesingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("payment succesfull");
      }
    }
  };

  return (
    <div className="payment-form-container">
      <form className="form-container" onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <Button disab buttonType="inverted" disabled={proccesingPayment}>
          Pay now
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
