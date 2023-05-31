import { useState } from "react";

export default function PaymentUI({ setPaymentUI }) {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  return (
    <div className="overflow-y-scroll overscroll-contain  w-96 min-h-[90vh] max-h-[90vh] bg-green-900 shadow-2xl md:mx-20">
      {paymentSuccessful ? (
        <div className="p-2 m-4 text-2xl text-green-50 bg-green-700">
          <h1>Payment Successful</h1>
          <h1>Order Created</h1>
        </div>
      ) : (
        <div className="p-4 text-green-50">
          <div className="py-2 text-2xl">Payment Details</div>
          <form className="flex flex-col gap-2 px-4 pt-2 my-4 bg-green-700">
            <div className="flex flex-col">
              <label className="text-sm font-normal">Name</label>
              <input
                placeholder="Full Name"
                className="px-4 py-2 mb-2 w-full text-xl bg-green-100 border focus:outline-none focus:ring-2 focus:ring-green-800 text-green-950"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-normal">Card Number</label>
              <input
                placeholder="XXXX-XXXX-XXXX-XXXX"
                className="px-4 py-2 mb-2 w-full text-xl bg-green-100 border focus:outline-none focus:ring-2 focus:ring-green-800 text-green-950"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-normal">Expiry Date</label>
              <input
                placeholder="MM/YYYY"
                className="px-4 py-2 mb-2 w-full text-xl bg-green-100 border focus:outline-none focus:ring-2 focus:ring-green-800 text-green-950"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-normal">CVV</label>
              <input
                placeholder="XXX"
                className="px-4 py-2 mb-6 w-full text-xl bg-green-100 border focus:outline-none focus:ring-2 focus:ring-green-800 text-green-950"
              />
            </div>
          </form>
          <button
            onClick={() => setPaymentUI(false)}
            className="py-2 mt-4 mb-2 w-full text-xl text-green-50  bg-green-950 hover:bg-green-700 hover:text-green-950 focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            Back to Cart
          </button>
          <button
            onClick={() => setPaymentSuccessful(true)}
            className="py-2 mt-2 mb-8 w-full text-xl bg-green-400  text-green-950 hover:bg-green-700 hover:text-green-50 active:bg-green-600 active:outline-none focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            Pay
          </button>
        </div>
      )}
    </div>
  );
}
