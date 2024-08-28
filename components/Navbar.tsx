import Image from "next/image";
import React, { useState } from "react";

// Define the CartItem interface
interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
}

const Navbar: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="navbar bg-opacity-10 backdrop-blur-lg font-mont p-5 fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Brands</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <Image
            src="/images/logoipsum-248.svg"
            alt="Logo"
            width={80}
            height={80}
            className="bg-blue-900 p-2 rounded-md"
          />
          GlowCart
        </a>
      </div>

      {/* desktop design */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Brands</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-4"
              className="ml-28 drawer-button btn bg-orange-500 text-white hover:text-orange-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              {cart.length > 0 && (
                <span className="badge badge-secondary absolute top-0 right-0 text-xs p-1 bg-red-500 text-white">
                  {cart.length}
                </span>
              )}
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <li>
                <h2 className="text-xl font-bold">Cart Items</h2>

                <Image
                  src="/images/undraw_shopping_app_flsj.png"
                  alt=""
                  width={230}
                  height={230}
                  className="h-48 object-cover cursor-none rounded-sm mt-40"
                />
                <div className="flex w-full flex-col">
                  <div className="divider divider-neutral font-bold ">GlowCart</div>
                </div>

                <button className="px-full bg-orange-500 text-white hover:bg-orange-600">View Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;





// import Image from "next/image";
// import React, { useState } from "react";

// // Define the CartItem interface
// interface CartItem {
//   id: number;
//   image: string;
//   name: string;
//   price: number;
// }

// const Navbar: React.FC = () => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   // Function to add item to cart
//   const addToCart = (item: CartItem) => {
//     setCart((prevCart) => [...prevCart, item]);
//   };

//   return (
//     <div className="navbar bg-opacity-10 backdrop-blur-lg font-mont p-5 fixed top-0 z-50">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <a>Home</a>
//             </li>
//             <li>
//               <a>About Us</a>
//             </li>
//             <li>
//               <a>Products</a>
//             </li>
//             <li>
//               <a>Brands</a>
//             </li>
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl">
//           <Image
//             src="/images/logoipsum-248.svg"
//             alt="Logo"
//             width={80}
//             height={80}
//             className="bg-blue-900 p-2 rounded-md"
//           />
//           GlowCart
//         </a>
//       </div>

//       {/* Desktop design */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <a>Home</a>
//           </li>
//           <li>
//             <a>About Us</a>
//           </li>
//           <li>
//             <a>Products</a>
//           </li>
//           <li>
//             <a>Brands</a>
//           </li>
//         </ul>
//       </div>

//       <div className="navbar-end">
//         <div className="drawer drawer-end">
//           <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
//           <div className="drawer-content">
//             <label
//               htmlFor="my-drawer-4"
//               className="ml-28 drawer-button btn bg-orange-500 text-white hover:text-orange-500 relative"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="size-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
//                 />
//               </svg>
//               {cart.length > 0 && (
//                 <span className="badge badge-secondary absolute top-0 right-0 text-xs p-1 bg-red-500 text-white">
//                   {cart.length}
//                 </span>
//               )}
//             </label>
//           </div>
//           <div className="drawer-side">
//             <label
//               htmlFor="my-drawer-4"
//               aria-label="close sidebar"
//               className="drawer-overlay"
//             ></label>
//             <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
//               <li>
//                 <h2 className="text-xl font-bold">Cart</h2>
//                 {cart.length > 0 ? (
//                   cart.map((item) => (
//                     <div key={item.id} className="flex items-center mb-2">
//                       <Image
//                         src={item.image}
//                         alt={item.name}
//                         width={50}
//                         height={50}
//                         className="mr-2"
//                       />
//                       <div>
//                         <p>{item.name}</p>
//                         <p>${item.price.toFixed(2)}</p>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p>Your cart is empty</p>
//                 )}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;








// import Image from "next/image";
// import React, { useState } from "react";
// import CartPage from "./CartPage";

// // Define the CartItem interface
// interface CartItem {
//   id: number;
//   image: string;
//   name: string;
//   price: number;
// }

// const Navbar: React.FC = () => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   // Function to add item to cart
//   const addToCart = (item: CartItem) => {
//     setCart((prevCart) => [...prevCart, item]);
//   };

//   return (
//     <div className="navbar bg-opacity-10 backdrop-blur-lg font-mont p-5 fixed top-0 z-50">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <a>Home</a>
//             </li>
//             <li>
//               <a>About Us</a>
//             </li>
//             <li>
//               <a>Products</a>
//             </li>
//             <li>
//               <a>Brands</a>
//             </li>
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl">
//           <Image
//             src="/images/logoipsum-248.svg"
//             alt="Logo"
//             width={80}
//             height={80}
//             className="bg-blue-900 p-2 rounded-md"
//           />
//           GlowCart
//         </a>
//       </div>

//       {/* Desktop design */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <a>Home</a>
//           </li>
//           <li>
//             <a>About Us</a>
//           </li>
//           <li>
//             <a>Products</a>
//           </li>
//           <li>
//             <a>Brands</a>
//           </li>
//         </ul>
//       </div>

//       <div className="navbar-end">
//         <div className="drawer drawer-end">
//           <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
//           <div className="drawer-content">
//             <label
//               htmlFor="my-drawer-4"
//               className="ml-28 drawer-button btn bg-orange-500 text-white hover:text-orange-500 relative"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="size-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
//                 />
//               </svg>
//               {cart.length > 0 && (
//                 <span className="badge badge-secondary absolute top-0 right-0 text-xs p-1 bg-red-500 text-white">
//                   {cart.length}
//                 </span>
//               )}
//             </label>
//           </div>
//           <div className="drawer-side">
//             <label
//               htmlFor="my-drawer-4"
//               aria-label="close sidebar"
//               className="drawer-overlay"
//             ></label>
//             <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
//               <li>
//                 <h2 className="text-xl font-bold">Cart</h2>
//               </li>
//               {cart.length > 0 ? (
//                 cart.map((item) => (
//                   <li key={item.id} className="flex items-center mb-2">
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       width={50}
//                       height={50}
//                       className="mr-2"
//                     />
//                     <div>
//                       <p>{item.name}</p>
//                       <p>${item.price.toFixed(2)}</p>
//                     </div>
//                   </li>
//                 ))
//               ) : (
//                 <li>Your cart is empty</li>
//               )}
//             </ul>
//             <CartPage cart={cart} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
