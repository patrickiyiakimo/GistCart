"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number; // Updated to accept different quantities
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
    // Filter out the item with the matching id
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);

    // Update the state and local storage
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Notify user about the removed item
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

  //decreasing cart function
  const handleDecrease = (item: CartItem) => {
    console.log(item.id)
  }

  //increasing cart function
  const handleIncrease = (item: CartItem) => {
    console.log(item.id)
  }

  return (
    <div className="font-mont">
      <div className="font-bold text-2xl md:text-6xl mt-36 text-center mb-20">
        <h1>Items Added To Your Cart</h1>
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-2xl">Your cart is empty</p>
      ) : (
        <div className="container justify-center items-center flex">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
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
                {/* Map through the cart items */}
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
                    {/* <td>{item.quantity}</td> */}
                    <div className="mt-6 whitespace-nowrap">
                      <button className="btn btn-xs" onClick={() => handleDecrease(item)}>-</button>
                      <input type="number" value={item.quantity} className="w-10 mx-2 text-center overflow-hidden appearance-none"/>
                      <button className="btn btn-xs" onClick={() => handleIncrease(item)}>+</button>
                    </div>
                    <td>${item.price}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn btn-ghost btn-xs bg-red-500 text-white"
                      >
                        Remove
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
          <p>Total Price: $0.00</p>
          <button className="btn bg-orange-500 text-white">
            Proceed Checkout
          </button>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
