import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// Define the CartItem interface
interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
}

const Navbar: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [theme, setTheme] = useState<string>(() => {
    // Initialize theme from localStorage or default to 'light'
    return typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light";
  });

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem("theme", theme);

    // Safely access document and set attribute
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/brands">Brands</Link>
            </li>
            <li>
              <label className="swap swap-rotate w-10">
                <input
                  type="checkbox"
                  onChange={handleToggle}
                  checked={theme === "dark"}
                />

                {/* sun icon */}
                <svg
                  className="swap-on h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-off  h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/brands">Brands</Link>
          </li>
          <li>
            <label className="swap swap-rotate w-10">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === "dark"}
              />

              {/* sun icon */}
              <svg
                className="swap-on h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
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
                   <div className="divider divider-neutral font-bold ">
                   GlowCart
                   </div>
                 </div>

                 <Link
                   href="/cart"
                 className="px-full bg-orange-500 text-white hover:bg-orange-600"
                >
                   View Cart
               </Link>
               </li>
             </ul>
           </div>
         </div> 
        </div> 
    </div>
  );
};

export default Navbar;
