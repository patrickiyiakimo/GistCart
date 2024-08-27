import About from "@/components/About";
import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
// import ProductDetails from "@/components/[id]/ProductDetails";
// import Image from "next/image";

export default function Home() {
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
        <BestSelling />
      </div>
      {/* <ProductDetails /> */}
    </main>
  );
}
