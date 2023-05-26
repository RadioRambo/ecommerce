"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { CartProvider } from "./CartContext";
import Cart from "./products/cart";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [cartToCloseOnToggle, setCartToCloseOnToggle] = useState("Cart");

  const [isOpen, setIsOpen] = useState(false);
  function toggleCart() {
    setIsOpen(!isOpen);
  }
  return (
    <CartProvider>
      <html lang="en">
        <body
          className={`${inter.className} selection:bg-green-950 selection:text-green-100 font-semibold  `}
        >
          <div className=" ">
            <nav className="bg-green-200  ">
              <div className="container mx-auto flex justify-between items-center py-2 md:px-20 px-4 ">
                <a href="./" className="font-bold text-xl">
                  SUCCULENT STORE
                </a>
                <div className="flex justify-between gap-8">
                  <div className="">Login</div>
                  <div className="-mr-2">Orders</div>
                  <div>
                    <div className="relative w-12  text-end " onClick={toggleCart}>
                      {isOpen ? "Close" : "Cart"}
                    </div>
                    {isOpen && (
                      <div className="absolute top-10 right-0 ">
                        <Cart />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </nav>
            <div className=" ">{children}</div>
          </div>
        </body>
      </html>
    </CartProvider>
  );
}
