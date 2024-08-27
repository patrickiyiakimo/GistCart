import Image from 'next/image';
import React from 'react'

export default function Navbar() {
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
            alt=""
            width={80}
            height={80}
            className='bg-blue-900 p-2 rounded-md'
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
        <a className="btn bg-orange-500 text-white hover:bg-orange-400">
          Log In
        </a>
      </div>
    </div>
  );
}
