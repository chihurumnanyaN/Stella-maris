"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  return (
    <header className="bg-[#f4e7ba]/50 backdrop-blur-2xl text-[#060c40] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <Logo colour={"black"} />

        {/* Nav Links */}
        <nav>
          <ul className="space-x-6 items-center text-lg font-semibold hidden lg:flex">
            <li>
              <Link
                href="/about"
                className={`${
                  pathname === "/about" && "border-b-2 pb-1"
                }  hover:text-[#0d1667] transition-colors duration-300`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/history"
                className={`${pathname === "/history" && "border-b-2 pb-1"}
                  hover:text-[#0d1667] transition-colors duration-300`}
              >
                History
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className={`${pathname === "/gallery" && "border-b-2 pb-1"}
                  hover:text-[#0d1667] transition-colors duration-300`}
              >
                <span>Gallery</span>
              </Link>
            </li>
            <li>
              <Link
                href="/activities"
                className={`${pathname === "/activities" && "border-b-2 pb-1"}
                  hover:text-[#0d1667] transition-colors duration-300`}
              >
                <span>Activities</span>
              </Link>
            </li>
            <li>
              <Link
                href="/announcements"
                className={`${
                  pathname === "/announcements" && "border-b-2 pb-1"
                }
                  hover:text-[#0d1667] transition-colors duration-300`}
              >
                <span>Announcements</span>
              </Link>
            </li>
            <li>
              <Link
                href="/pastoral-team"
                className={`${
                  pathname === "/pastoral-team" && "border-b-2 pb-1"
                }
                  hover:text-[#0d1667] transition-colors duration-300`}
              >
                <span>Pastoral Team</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${pathname === "/contact" && "border-b-2 pb-1"}
                  hover:text-[#0d1667] transition-colors duration-300`}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex lg:hidden justify-between items-center h-full w-[30%] gap-3">
            <Link href="/anouncements">
              <BiBell className="text-[#59c262] fill-[#59c262] text-3xl" />
            </Link>

            <button
              className="lg:hidden text-4xl"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>

        {/* Mobile Slide Menu */}

        {menuOpen && (
          <div
            id="mobile-menu"
            className={`lg:hidden bg-black/50 backdrop-blur-2xl text-[#060c40] absolute w-full overflow-hidden shadow-lg z-20 ${
              menuOpen ? "fixed top-[94px] left-0 mt-1" : ""
            } `}
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-lg font-medium w-full">
              <Link
                href="/about"
                className=" bg-[#f4e7ba] rounded-2xl hover:bg-[#f4e7ba]/60 p-5 w-full transition-colors duration-300"
              >
                About
              </Link>

              <Link
                href="/history"
                className=" bg-[#f4e7ba] rounded-2xl hover:bg-[#f4e7ba]/60 p-5 w-full transition-colors duration-300"
              >
                History
              </Link>

              <Link
                href="/gallery"
                className=" bg-[#f4e7ba] rounded-2xl hover:bg-[#f4e7ba]/60 p-5 w-full transition-colors duration-300"
              >
                <span>Gallery</span>
              </Link>

              <Link
                href="/activities"
                className=" bg-[#f4e7ba] rounded-2xl hover:bg-[#f4e7ba]/60 p-5 w-full transition-colors duration-300"
              >
                <span>Activities</span>
              </Link>

              <Link
                href="/pastoral-team"
                className=" bg-[#f4e7ba] rounded-2xl hover:bg-[#f4e7ba]/60 p-5 w-full transition-colors duration-300"
              >
                <span>Pastoral Team</span>
              </Link>
              <Link
                href="/contact"
                className=" bg-[#f4e7ba] rounded-2xl hover:bg-[#f4e7ba]/60 p-5 w-full transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
