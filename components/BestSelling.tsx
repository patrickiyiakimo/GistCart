// "use client";

// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
//   description: string;
// }

// const BestSelling: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [searchTerm, setSearchTerm] = useState<string>("");

//   const itemsPerPage = 9;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("/skincare.json");
//         const data: Product[] = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Failed to fetch:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Filter products based on search term
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Get current products for pagination
//   const indexOfLastProduct = currentPage * itemsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
//   const currentProducts = filteredProducts.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const getPageNumbers = () => {
//     const pageNumbers = [];
//     let startPage = Math.max(1, currentPage - 2);
//     let endPage = Math.min(totalPages, currentPage + 2);

//     if (currentPage <= 3) {
//       endPage = Math.min(5, totalPages);
//     }

//     if (currentPage > totalPages - 3) {
//       startPage = Math.max(1, totalPages - 4);
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       pageNumbers.push(i);
//     }

//     return pageNumbers;
//   };

//   return (
//     <div className="font-mont mb-40">
//       <div className="flex w-full flex-col">
//         <div className="divider divider-neutral text-3xl text-orange-300 font-bold">
//           GlowCart
//         </div>
//         <h1 className="font-bold lg:text-6xl text-center mb-20">
//           Best Selling Products
//         </h1>
//       </div>
//       <input
//         type="text"
//         placeholder="Search your favourite..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="p-3 ml-24 md:w-96 py-4 border-2 md:ml-96 mb-10"
//       />
//       <ul className="flex ml-20 gap-10 pb-10 font-semibold ">
//         <li>All</li>
//         <li>Category</li>
//         <li>Price</li>
//       </ul>
//       <div className="ml-28 md:ml-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {currentProducts.map((product) => (
//           <div key={product.id} className="w-52 md:w-52 shadow-xl pl-5 pr-5">
//             <Image
//               src={product.image}
//               alt={product.name}
//               width={230}
//               height={230}
//               className="h-48 object-cover rounded-sm"
//             />
//             <p className="font-bold text-xl pt-3">{product.name}</p>
//             <p className="text-sm">{product.description}</p>
//             <p className="text-red-500 font-bold pb-3 text-xl">
//               ${product.price}
//             </p>
//             <button className="bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap mb-5 rounded-lg px-10 py-3">
//               Add to cart
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-8">
//         <button
//           onClick={handlePreviousPage}
//           disabled={currentPage === 1}
//           className="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg md:px-4 py-2 "
//         >
//           Previous
//         </button>
//         {getPageNumbers().map((number) => (
//           <button
//             key={number}
//             onClick={() => setCurrentPage(number)}
//             className={`${
//               currentPage === number
//                 ? "bg-orange-500 text-white"
//                 : "bg-gray-300 text-gray-700"
//             } rounded-lg px-4 py-2 mx-1`}
//           >
//             {number}
//           </button>
//         ))}
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//           className="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg px-4 py-2 "
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BestSelling;







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

const BestSelling: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
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

  // Get current products for pagination
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      endPage = Math.min(5, totalPages);
    }

    if (currentPage > totalPages - 3) {
      startPage = Math.max(1, totalPages - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="font-mont mb-40">
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
      <div className="ml-28 md:ml-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentProducts.map((product) => (
          <div key={product.id} className="w-52 md:w-52 shadow-xl pl-5 pr-5">
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
            <button className="bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap mb-5 rounded-lg px-10 py-3">
              Add to cart
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg md:px-4 py-2 "
        >
          Previous
        </button>
        {getPageNumbers().map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`${
              currentPage === number
                ? "bg-orange-500 text-white"
                : "bg-gray-300 text-gray-700"
            } rounded-lg px-4 py-2 mx-1`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg px-4 py-2 "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BestSelling;
