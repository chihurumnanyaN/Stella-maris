import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import TopBar from "@/components/TopBar";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Stella Maris Parish Aba – Catholic Church in Abia",
  description:
    "Welcome to Stella Maris Parish Aba, a vibrant Catholic Church in Abia State. Mma anyi si na Chi Parish.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Providers>
          <TopBar />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
