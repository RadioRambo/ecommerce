"use client";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext.js";
import PaymentUI from "./Payment.js";

export default function Cart() {
  const [total, setTotal] = useState(0);
  const [paymentUI, setPaymentUI] = useState(false);

  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += Number(item.price);
    });
    setTotal(sum);
  }, [cartItems]);

  return (
    <div className="">
      {!paymentUI ? (
        <div className="flex flex-col justify-between p-4 w-96 min-h-[90vh] max-h-[90vh] bg-green-900 shadow-2xl md:mx-20 overscroll-contain">
          <div className="py-2 text-2xl text-green-50">Cart</div>
          {cartItems.length === 0 ? (
            <div className="text-green-50">
              Your cart is empty
              <div className="mt-2">
                <a className="text-2xl" href="./products">
                  Shop Products?
                </a>
              </div>
            </div>
          ) : (
            <div className="overflow-y-scroll overscroll-contain">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between px-4 py-2 m-2 text-xl text-green-50 bg-green-700"
                >
                  <div className="font-normal">{item.product}</div>
                  <div className="">₹ {item.price}</div>
                </div>
              ))}
            </div>
          )}
          <div className="">
            <div className="flex justify-between px-4 py-2 mt-8 text-2xl text-green-50 bg-green-950">
              <div>Total</div>
              <div>₹ {total}</div>
            </div>

            <button
              className="px-4 py-2 my-2 w-full text-xl bg-green-400 text-green-950 hover:bg-green-700 hover:text-green-50 active:bg-green-600 active:outline-none focus:outline-none focus:ring-2 focus:ring-green-600"
              onClick={() => {
                setPaymentUI(true);
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      ) : (
        <PaymentUI setPaymentUI={setPaymentUI} />
      )}
    </div>
  );
}
