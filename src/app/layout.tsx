import { Metadata } from "next";
import "./globals.css";

// app/layout.tsx
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
