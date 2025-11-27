// app/layout.js
import { Inter } from "next/font/google";
import './globals.css'
import { Providers } from "./Providers";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Product App | Next.js Demo",
  description: "Next.js App Router application with NextAuth.js authentication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-800 bg-white antialiased`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar /> 
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}