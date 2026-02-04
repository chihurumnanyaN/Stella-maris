import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import TopBar from "@/components/TopBar";
import Providers from "../providers";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white">
      <Providers>
        <TopBar />
        <Navbar />
        <div className="w-full h-full">{children}</div>
        <Footer />
      </Providers>
    </div>
  );
}
