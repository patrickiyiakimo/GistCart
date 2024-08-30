"use client";

import About from "@/components/About";
import BestSelling from "@/components/BestSelling";
import CartPage from "@/components/CartPage";
// import CartDetails from "@/components/cartdetails/CartDetails";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useState } from "react";
import Faq from "@/components/Faq";

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <main className="">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <BestSelling addToCart={addToCart} />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
      {/* <div>
        <CartDetails />
      </div> */}
    </main>
  );
}
