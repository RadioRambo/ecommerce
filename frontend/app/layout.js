"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { CartProvider } from "./CartContext";
import Cart from "./Cart";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Login from "./Login";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [cartToCloseOnToggle, setCartToCloseOnToggle] = useState("Cart");

  const [isOpen, setIsOpen] = useState(false);
  function toggleCart() {
    setIsOpen(!isOpen);
  }
  const router = useRouter();

  return (
    <CartProvider>
      <html lang="en">
        <body
          className={`${inter.className} selection:bg-green-950 selection:text-green-100 font-semibold  `}
        >
          <div className="">
            <nav className="bg-green-200">
              <div className="container flex gap-4 justify-between px-4 py-2 mx-auto md:justify-between md:items-center md:flex-row md:px-20">
                <a href="./" className="text-xl font-bold">
                  SUCCULENT STORE
                </a>
                <div className="flex gap-3 justify-between md:gap-8 sm:gap-4">
                  <Login />
                  <div className="-mr-2">Orders</div>
                  <div>
                    <div
                      className="relative w-12 text-end"
                      onClick={toggleCart}
                    >
                      {isOpen ? "Close" : "Cart"}
                    </div>
                    {isOpen && (
                      <div className="absolute right-0 top-10">
                        <Cart />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </nav>
            <div>{children}</div>
          </div>
        </body>
      </html>
    </CartProvider>
  );
}
