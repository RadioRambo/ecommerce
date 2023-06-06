"use client";
import { useContext } from "react";
import { CartContext } from "./CartContext.js";
import { useRouter } from "next/navigation";

export default function Login() {
  const { login, setLogin } = useContext(CartContext);
  const router = useRouter();

  return (
    <div>
      {login ? (
        <button
          onClick={() => {
            setLogin(false);
            router.push("/auth");
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => {
            router.push("/auth");
          }}
        >
          Log In
        </button>
      )}
    </div>
  );
}
