import React from "react";
import FAQs from "../FAQs";

const DeliveryFAQ = () => {
  return (
    <div className="delivery__faq">
      <div className="delivery__faq__container container">
        <h2>Frequently Asked Questions (FAQs)</h2>

        <FAQs
          question="How do I order thru Jollibee delivery?"
          answer="You may order thru the following ways:"
          answerSupport={[
            "Order thru the Jollibee mobile app",
            "#87000 Hotline delivery accepts cash and credit card payments",
            "Visit the JollibeeDelivery.com website",
          ]}
        />
        <FAQs
          question="Is Jollibee delivery available nationwide?"
          answer="Yes, Jollibee delivery is available nationwide."
          answerSupport={[]}
        />
        <FAQs
          question="How much is the delivery fee of Jollibee Delivery?"
          answer="The Delivery Fee is 10% on top of the product Dine-in SRP."
          answerSupport={[]}
        />
        <FAQs
          question="How many minutes is the delivery serving time?"
          answer="Kindly expect your orders to arrive between 45mins to 1hour."
          answerSupport={[]}
        />
        <FAQs
          question="What’s the minimum and maximum order purchase for delivery?"
          answer="Minimum order of P200, Maximum of P5500 (inclusive of delivery fee)"
          answerSupport={[]}
        />
        <FAQs
          question="What are the payment options available for delivery?"
          answer=""
          answerSupport={[
            "Jollibeedelivery.com or the Jollibee Mobile App accepts debit, credit card payments through Pesopay and cashless payments thru GCash and Paymaya on orders.",
            "#87000 Hotline delivery accepts cash and credit card payments.",
          ]}
        />
      </div>
    </div>
  );
};

export default DeliveryFAQ;
