"use client";
import { useContext, useState } from "react";
import { CartContext } from ".././CartContext.js";
import { useRouter } from "next/navigation";

export default function Auth() {
  const { login, setLogin } = useContext(CartContext);
  const [incorrectDetails, setIncorrectDetails] = useState(false);

  const router = useRouter();

  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  function authentication() {
    if (
      userCredentials.username === "user" &&
      userCredentials.password === "pass"
    ) {
      router.push("/");
      setIncorrectDetails(false);
      setLogin(true);
    } else {
      setIncorrectDetails(true);
    }
  }

  return (
    <div className="px-2 bg-green-100 md:px-20">
      <div className="container mx-auto">
        <div className="flex justify-center items-center min-h-screen">
          <div className="p-6 w-full max-w-md bg-green-800 shadow-md">
            {login ? (
              <div>
                <h2 className="text-3xl text-green-50">
                  You are already logged in
                </h2>
                <h2 className="mt-4 text-xl text-green-50">
                  <a href="/products">Shop Products?</a>
                </h2>
              </div>
            ) : (
              <div>
                <h2 className="mb-6 text-3xl text-green-50">Login</h2>
                <form>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-normal text-green-50"
                      htmlFor="email"
                    >
                      Username
                    </label>
                    <input
                      className="px-3 py-2 w-full leading-tight rounded border appearance-none focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder="user"
                      value={userCredentials.username}
                      onChange={(event) =>
                        setUserCredentials((prevState) => ({
                          ...prevState,
                          username: event.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-normal text-green-50"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="px-3 py-2 w-full leading-tight border appearance-none focus:outline-none focus:shadow-outline"
                      type="password"
                      placeholder="pass"
                      value={userCredentials.password}
                      onChange={(event) =>
                        setUserCredentials((prevState) => ({
                          ...prevState,
                          password: event.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    {incorrectDetails ? (
                      <div className="text-red-500">
                        Incorrect Details. Try again
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <button
                    className="px-4 py-2 mt-4 font-bold bg-green-500 rounded text-green-950 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={authentication}
                  >
                    Sign In
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
