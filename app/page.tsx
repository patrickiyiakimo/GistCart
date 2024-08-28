import About from "@/components/About";
import BestSelling from "@/components/BestSelling";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


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
      <Footer />
    </main>
  );
}
