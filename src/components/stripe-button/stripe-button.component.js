import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_4Vm4YJrPsRpIEL71VDmTTOg5000ZEwJvGG";

  const onToken = token => {
    console.log(token);
    alert("Payment Succcessful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROW Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
