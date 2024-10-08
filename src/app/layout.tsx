import React, { PropsWithChildren } from "react";
import { Inter, Prata } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";
import { Header } from "../layout/Header";
import { ErrorContextProvider } from "@/context/ErrorContext";

const prata = Prata({
  weight: "400",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bazaar",
  description: "Shopping center",
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${prata.className} ${inter.className}`}>
        <main className="w-full min-h-screen bg-gradient-to-b from-amber-50 to-white to-10% lg:to-30%">
          <div className="flex flex-col min-h-screen">
            <Header />
            <ErrorContextProvider>{children}</ErrorContextProvider>
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
