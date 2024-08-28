import React from "react";
import Image from "next/image";

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
}

interface CartPageProps {
  cart: CartItem[];
}

const CartPage: React.FC<CartPageProps> = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <Image src={item.image} alt={item.name} width={100} height={100} />
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
