import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import RSMallIcon from "../public/logo.svg"

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "RSMall",
    template: "%s",
  },
  description: "Practice crating E-commerce Website By NextJs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
