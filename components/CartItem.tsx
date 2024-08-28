import React, { useState } from "react";
import BestSelling from "./BestSelling";
import CartPage from "./CartPage";
// import Navbar from "./Navbar";

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div>
      <BestSelling addToCart={addToCart} />
      <CartPage cart={cart} />
      {/* <Navbar addToCart={addToCart} /> */}
    </div>
  );
};

export default App;
