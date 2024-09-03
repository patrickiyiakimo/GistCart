import React from "react";

export default function Faq() {
  return (
    <div className="font-mont mb-20" id="faq">
      <div className="flex w-full flex-col">
        <div className="divider divider-neutral text-3xl text-orange-300 font-bold">
          GlowCart
        </div>
        <h1 className="font-bold lg:text-6xl text-center mb-20">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="collapse collapse-plus  ">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is GlowCart?
        </div>
        <div className="collapse-content">
          <p>
            GlowCart is your one-stop online shopping destination, offering a
            wide range of products from fashion to electronics, home essentials,
            and more. We aim to provide a seamless and enjoyable shopping
            experience with the best deals and customer service.
          </p>
        </div>
        <hr className="border-black border-t-1" />
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How do I place an order?
        </div>
        <div className="collapse-content">
          <p>
            Placing an order is easy! Browse through our products, select the
            items you want, add them to your cart, and proceed to checkout.
            You'll need to create an account or log in to complete your
            purchase.
          </p>
        </div>
        <hr className="border-black border-t-1" />
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What payment methods are accepted?
        </div>
        <div className="collapse-content">
          <p>
            We accept various payment methods, including credit/debit cards,
            PayPal, and other secure payment gateways. All transactions are
            encrypted to ensure your information is safe.
          </p>
        </div>
        <hr className="border-black border-t-1" />
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I change or cancel my order?
        </div>
        <div className="collapse-content">
          <p>
            If you need to change or cancel your order, please contact us
            immediately. Orders can only be modified or canceled before they are
            shipped. Once shipped, you can follow our return process if needed.
          </p>
        </div>
        <hr className="border-black border-t-1" />
      </div>
    </div>
  );
}
