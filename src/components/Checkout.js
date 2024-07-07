// src/components/Checkout.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    // Integrate payment gateway here
    alert("Payment successful!");
    navigate("/bookings");
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleCheckout}>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="">Select Payment Method</option>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        <button type="submit">Complete Transaction</button>
      </form>
    </div>
  );
};

export default Checkout;
