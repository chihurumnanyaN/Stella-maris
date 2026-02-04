import Header from "@/components/(dashboard)/Header";
import Sidebar from "@/components/(dashboard)/Sidebar";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <div className="flex justify-start items-start">
        <div className="hidden md:flex sticky top-0">
          <Sidebar />
        </div>

        <div className="w-full h-full flex flex-col justify-start item-start">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}
