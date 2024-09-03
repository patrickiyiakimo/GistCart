"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Page() {
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
        <section className="ml-10 lg:justify-center lg:items-center lg:ml-52">
          <p className="font-semibold mx-4 inline">Customer Details:</p>
          <input
            type="text"
            placeholder="Input Address"
            className="mr-10 px-10 py-3 rounded-md border-2 border-black"
          />
          <input
            type="text"
            placeholder="Email"
            className="px-10 py-3 rounded-md border-2 border-black"
          />
          <div className="mt-4">
            <input type="checkbox" id="terms" className="hidden peer" />
            <label htmlFor="terms" className="flex items-center cursor-pointer">
              <span className="w-5 h-5 border-2 border-black rounded-sm flex items-center justify-center peer-checked:bg-orange-400">
                <svg
                  className="hidden peer-checked:block w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
              <p className="ml-2">
                I agree to GlowCart
                <span className="text-orange-400 cursor-pointer text-sm md:text-xl lg:text-xl">
                  {" "}
                  terms and conditions
                </span>{" "}
                together with its
                <span className="text-orange-400 cursor-pointer">
                  {" "}
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
              <span className="w-5 h-5 border-2 border-black rounded-sm flex items-center justify-center peer-checked:bg-orange-400">
                <svg
                  className="hidden peer-checked:block w-4 h-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
              <p className="ml-2">
                I would like to receive promotional/marketing emails
              </p>
            </label>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
