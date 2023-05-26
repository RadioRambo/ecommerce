import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
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
              <div className="flex justify-between gap-4">
                <div className="">Login</div>
                <div className="">Orders</div>
                <div className="">Cart</div>
              </div>
            </div>
          </nav>
          <div className=" ">{children}</div>
        </div>
      </body>
    </html>
  );
}
