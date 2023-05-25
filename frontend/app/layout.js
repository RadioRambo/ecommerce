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
              <p className="font-bold text-xl">SUCCULENT STORE</p>
              <div className="flex items-center">Menu</div>
            </div>
          </nav>
          <div className=" ">{children}</div>
        </div>
      </body>
    </html>
  );
}
