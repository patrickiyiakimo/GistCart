"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

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

    // Show skeleton for 2 seconds before displaying products
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Filter products based on search term, description, and price
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

  // Reset currentPage to 1 whenever filter terms change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, descriptionTerm, priceTerm]);

  // Current products for pagination
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
          type="number"
          placeholder="Search by max price..."
          value={priceTerm}
          onChange={(e) => setPriceTerm(e.target.value)}
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
        // Display skeletons while loading
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
        // Display products after loading
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
                onClick={() =>
                  addToCart({
                    id: product.id,
                    image: product.image,
                    name: product.name,
                    price: product.price,
                  })
                }
                className="bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap mb-5 rounded-lg px-10 py-3"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Pagination controls */}
      <div className="mb-40 mt-8">
        {getPageNumbers().map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`${
              currentPage === number
                ? "bg-orange-500 text-white"
                : "bg-gray-300 text-gray-700"
            } rounded-lg px-3 py-2 mx-1`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
