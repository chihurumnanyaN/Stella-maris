"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { BiBell, BiDonateHeart } from "react-icons/bi";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { FaDonate } from "react-icons/fa";
import { FcDonate } from "react-icons/fc";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  return (
    <header className="bg-[#f4e7ba]/50 backdrop-blur-2xl text-[#060c40] border-[#060c40] shadow-lg sticky top-0 z-50">
      <div className="max-w-[90%] mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <Logo colour={"black"} />

        {/* Nav Links */}
        <nav>
          <ul className="space-x-6 items-center text-lg font-semibold hidden lg:flex capitalize">
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
                href="/pastorial-team"
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
            <li>
              <Link
                href="/anthem"
                className={`${pathname === "/anthem" && "border-b-2 pb-1"}
                  hover:text-[#0d1667] transition-colors duration-300`}
              >
                Anthem
              </Link>
            </li>
            <li>
              <Link
                href="/donate"
                className={`bg-(--primary) hidden xl:flex justify-center items-center gap-3 shadow-md px-6 py-3 rounded-md font-bold hover:bg-(--primary)/85 text-white transition-colors duration-300`}
              >
                {" "}
                <BiDonateHeart />
                Donate
              </Link>
            </li>
          </ul>
          <div className="flex lg:hidden justify-between items-center h-full w-[30%] gap-3">
            <Link href="/announcements">
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
            className="lg:hidden fixed top-[94px] left-0 w-full z-30"
          >
            {/* overlay */}
            <div
              className="absolute inset-0 h-screen bg-black/20"
              onClick={() => setMenuOpen(false)}
            />

            {/* menu panel */}
            <div className="relative mx-4 mt-2 rounded-3xl bg-[#fdf8e8] shadow-xl overflow-hidden">
              <nav className="flex flex-col divide-y divide-[#e6d9aa] text-[#060c40]">
                {[
                  { href: "/about", label: "About" },
                  { href: "/history", label: "History" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/activities", label: "Activities" },
                  { href: "/pastorial-team", label: "Pastorial Team" },

                  { href: "/contact", label: "Contact" },
                  { href: "/anthem", label: "Anthem" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-6 py-5 text-base font-medium transition-colors hover:bg-[#f4e7ba] active:bg-[#e8d58f]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
