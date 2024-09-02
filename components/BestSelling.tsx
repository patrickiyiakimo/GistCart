"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";



interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface BestSellingProps {
  addToCart: (item: CartItem) => void;
}

const BestSelling: React.FC<BestSellingProps> = ({ addToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [descriptionTerm, setDescriptionTerm] = useState<string>("");
  const [priceTerm, setPriceTerm] = useState<string>("");
  const [cart, setCart] = useState<CartItem[]>([]); 

  const itemsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/skincare.json");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    };

    fetchProducts();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Initialize cart from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  useEffect(() => {
    // Update local storage when cart changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDescription = descriptionTerm
      ? product.description
          .toLowerCase()
          .includes(descriptionTerm.toLowerCase())
      : true;
    const matchesPrice = priceTerm
      ? product.price <= parseFloat(priceTerm)
      : true;

    return matchesSearchTerm && matchesDescription && matchesPrice;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, descriptionTerm, priceTerm]);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.min(5, totalPages); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const handleCartClick = (product: Product) => {
    const existingCartItem = cart.find((item) => item.id === product.id);
    if (existingCartItem) {
      toast.info(`${product.name} is already in the cart`);
    } else {
      const newCartItem: CartItem = {
        id: product.id,
        image: product.image,
        name: product.name,
        price: product.price,
        quantity: 1,
      };
      setCart([...cart, newCartItem]);
      addToCart(newCartItem);
      toast.success(`${product.name} added to cart`);
    }
  };

  return (
    <div className="font-mont">
      <div className="flex w-full flex-col">
        <div className="divider divider-neutral text-3xl text-orange-300 font-bold">
          GlowCart
        </div>
        <h1 className="font-bold lg:text-6xl text-center mb-20">
          Best Selling Products
        </h1>
      </div>
      <div className="ml-5 mr-5 grid grid-cols-2 md:flex justify-center gap-10 mb-10">
        <input
          type="text"
          placeholder="Search by description..."
          value={descriptionTerm}
          onChange={(e) => setDescriptionTerm(e.target.value)}
          className="p-3 py-4 border-2"
        />
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 py-4 border-2 "
        />
      </div>
      {loading ? (
        <div className="ml-20 md:ml-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="w-60 md:w-52 flex flex-col gap-4">
              <div className="skeleton h-48 w-full bg-gray-200"></div>
              <div className="skeleton h-4 w-28 bg-gray-200"></div>
              <div className="skeleton h-4 w-full bg-gray-200"></div>
              <div className="skeleton h-4 w-full bg-gray-200"></div>
              <div className="skeleton h-4 w-full bg-gray-200"></div>
              <div className="skeleton h-4 w-full bg-gray-200"></div>
              <div className="skeleton h-4 w-full bg-gray-200"></div>
              <div className="skeleton h-4 w-full bg-gray-200"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="ml-20 md:ml-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentProducts.map((product) => (
            <div key={product.id} className="w-60 md:w-52 shadow-xl pl-5 pr-5">
              <Image
                src={product.image}
                alt={product.name}
                width={230}
                height={230}
                className="h-48 object-cover rounded-sm"
              />
              <p className="font-bold text-xl pt-3">{product.name}</p>
              <p className="text-sm">{product.description}</p>
              <p className="text-red-500 font-bold pb-3 text-xl">
                ${product.price}
              </p>
              <button
                onClick={() => handleCartClick(product)}
                className={`${
                  cart.find((item) => item.id === product.id)
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600"
                } text-white whitespace-nowrap mb-5 rounded-lg px-10 py-3`}
              >
                {cart.find((item) => item.id === product.id)
                  ? "In Cart"
                  : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mb-40 mt-8 justify-center items-center flex">
        {getPageNumbers().map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`${
              currentPage === number
                ? "bg-orange-500 text-white"
                : "bg-gray-300 text-gray-700"
            } rounded-lg px-3 py-2 mx-1 `}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
