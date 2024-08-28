import React from "react";
import Image from "next/image";

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
}

interface CartPageProps {
  cart: CartItem[];
}

const CartPage: React.FC<CartPageProps> = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="ml-28 grid grid-cols-1 gap-10">
        <div className="w-40 shadow-xl pl-5 pr-5">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
              />
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;








// import React from "react";
// import Image from "next/image";

// // Define the CartItem interface again if not imported
// interface CartItem {
//   id: number;
//   image: string;
//   name: string;
//   price: number;
// }

// interface CartPageProps {
//   cart: CartItem[];
// }

// const CartPage: React.FC<CartPageProps> = ({ cart }) => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//       {cart.length > 0 ? (
//         cart.map((item) => (
//           <div key={item.id} className="flex items-center mb-4">
//             <Image
//               src={item.image}
//               alt={item.name}
//               width={50}
//               height={50}
//               className="mr-4"
//             />
//             <div>
//               <p>{item.name}</p>
//               <p>${item.price.toFixed(2)}</p>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>Your cart is empty</p>
//       )}
//     </div>
//   );
// };

// export default CartPage;
