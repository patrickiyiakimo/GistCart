"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: 1;
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Function to handle item removal
  const handleRemove = (id: number) => {
    // Filter out the item with the matching id
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="font-mont">
      <div className="font-bold text-6xl mt-36 text-center mb-20">
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
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td>{item.quantity}</td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        onClick={() => handleRemove(item.id)}
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
    </div>
  );
};

export default CartPage;
