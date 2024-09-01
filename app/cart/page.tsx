"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";




interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Function to handle item removal
  const handleDelete = (item: CartItem) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.error(`${item.name} removed from cart`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // Function to decrease item quantity
  const handleDecrease = (item: CartItem) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to increase item quantity
  const handleIncrease = (item: CartItem) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="font-mont">
      <Navbar />
      <div className="font-bold text-2xl md:text-6xl mt-36 text-center mb-20">
        <h1>Items Added To Your Cart</h1>
      </div>

      {cart.length === 0 ? (
        <p className="flex justify-center items-center  md:text-4xl text-orange-400 font-semibold">
          <IoCart className="w-40 h-40 md:w-72 md:h-72 text-orange-400" />
          Your Cart is Empty
        </p>
      ) : (
        <div className="container justify-center items-center flex">
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="bg-orange-400 text-white rounded-sm">
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <Image
                              src={item.image}
                              alt={`Image of ${item.name}`}
                              width={230}
                              height={230}
                              className="h-48 object-cover rounded-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-semibold whitespace-nowrap">
                      {item.name}
                    </td>
                    <td>
                      <div className="flex items-center whitespace-nowrap">
                        <button
                          className="btn btn-xs"
                          onClick={() => handleDecrease(item)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          readOnly
                          className="w-10 mx-2 text-center overflow-hidden appearance-none"
                        />
                        <button
                          className="btn btn-xs"
                          onClick={() => handleIncrease(item)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn text-red-500 w-20"
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <section className="my-12 flex flex-col md:flex-row justify-between items-start ml-10 md:ml-20 lg:ml-80">
        <div className="md:w-1/2 space-y-3">
          <h3 className="font-bold">Shopping Details</h3>
          <p>Total Items: {cart.length}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <button className="btn bg-orange-500 text-white">
            Proceed Checkout
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CartPage;
