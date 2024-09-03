"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currencySelected, setCurrencySelected] = useState<boolean>(false);

  const handlePayment = () => {
    setIsLoading(true);
    // Simulate payment process
    setTimeout(() => {
      setIsLoading(false);
      // Handle successful payment
      const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
      if (modal) {
        modal.showModal();
      }
    }, 2000);
  };

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (event.target.value) {
      setCurrencySelected(true);
    } else {
      setCurrencySelected(false);
    }
  };

  return (
    <div className="font-mont">
      <Navbar />
      <div className="mt-32 lg:mt-60 mb-40">
        <div className="flex w-full flex-col">
          <div className="divider divider-neutral text-3xl text-orange-300 font-bold">
            GlowCart
          </div>
          <h1 className="font-bold lg:text-6xl text-center mb-20">
            Proceed Checkout
          </h1>
        </div>
        <form>
          <section className="ml-10 lg:justify-center lg:items-center lg:ml-52">
            <p className="font-semibold mx-4 inline">Customer Details:</p>
            <input
              type="text"
              placeholder="Input Address"
              className="mr-10 px-10 py-3  rounded-md border-2 border-black"
            />
            <input
              type="text"
              placeholder="Email"
              className="px-10 py-3 mt-5 md:mt-0 rounded-md border-2 border-black"
            />
            <div className="mt-4">
              <input type="checkbox" id="terms" className="hidden peer" />
              <label
                htmlFor="terms"
                className="flex items-center cursor-pointer"
              >
                <input type="checkbox" defaultChecked className="checkbox" />
                <p className="ml-2">
                  I agree to GlowCart{" "}
                  <span className="text-orange-400 cursor-pointer text-sm md:text-xl lg:text-xl">
                    terms and conditions
                  </span>{" "}
                  together with its{" "}
                  <span className="text-orange-400 cursor-pointer">
                    privacy policy
                  </span>
                </p>
              </label>
            </div>
            <div className="mt-4">
              <input type="checkbox" id="promotions" className="hidden peer" />
              <label
                htmlFor="promotions"
                className="flex items-center cursor-pointer"
              >
                <input type="checkbox" defaultChecked className="checkbox" />
                <p className="ml-2">
                  I would like to receive promotional / marketing emails
                </p>
              </label>
            </div>
            <div className="mt-10 ">
              <label>Delivery Date:</label>
              <input
                type="date"
                className="py-4 px-20 md:px-40 md:ml-5 md:mt-5 border-2 border-black rounded-md"
              />
              <br />
              <label>Payment Method:</label>
              <select
                className="py-4 md:px-20  md:ml-5 md:mt-5 border-2 border-black rounded-md"
                onChange={handleCurrencyChange}
              >
                <option value="">Select Currency</option>
                <option value="USD">USD $</option>
                <option value="EUR">Euro EUR €</option>
                <option value="GBP">British Pound Sterling GBP £</option>
                <option value="JPY">Japanese Yen JPY ¥</option>
                <option value="NGN">Nigerian Naira NGN ₦</option>
                <option value="AUD">Australian Dollar AUD A$</option>
                <option value="CAD">Canadian Dollar CAD C$</option>
                <option value="CHF">Swiss Franc CHF</option>
                <option value="CNY">Chinese Yuan CNY ¥</option>
                <option value="KES">Kenyan Shilling KES KSh</option>
                <option value="MXN">Mexican Peso MXN $</option>
                <option value="SGD">Singapore Dollar SGD S$</option>
                <option value="HKD">Hong Kong Dollar HKD HK$</option>
                <option value="NZD">New Zealand Dollar NZD NZ$</option>
                <option value="KRW">South Korean Won KRW ₩</option>
                <option value="SEK">Swedish Krona SEK kr</option>
                <option value="NOK">Norwegian Krone NOK kr</option>
                <option value="DKK">Danish Krone DKK kr</option>
                <option value="TRY">Turkish Lira TRY ₺</option>
                <option value="AED">United Arab Emirates Dirham AED د.إ</option>
                <option value="INR">Indian Rupee INR ₹</option>
                <option value="BRL">Brazilian Real BRL R$</option>
                <option value="ZAR">South African Rand ZAR R</option>
                <option value="RUB">Russian Ruble RUB ₽</option>
              </select>
            </div>
            <div className="mt-10">
              <button
                onClick={handlePayment}
                disabled={!currencySelected || isLoading}
                className={`px-24 py-5 rounded-md border-none text-white hover:bg-orange-400 bg-orange-500 flex justify-center items-center ${
                  (!currencySelected || isLoading) &&
                  "cursor-not-allowed opacity-50"
                }`}
              >
                {isLoading ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  "Pay"
                )}
              </button>
            </div>
          </section>
        </form>
      </div>
      <Footer />

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Payment Successful!</h3>
          <p className="py-4">
            Your payment has been processed successfully. Thank you for your
            purchase!
          </p>
        </div>
      </dialog>
    </div>
  );
}
