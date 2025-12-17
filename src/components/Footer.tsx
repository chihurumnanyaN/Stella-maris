"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#16203A]  text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Name */}
        <div className="hidden md:flex flex-col space-y-3">
          <Logo colour={"white"} />
          <p>Mma Si Na Chi Parish</p>
          <div className="flex space-x-4 mt-2">
            <Link href="#" className="hover:text-[#D4A73B]">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-[#D4A73B]">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-[#D4A73B]">
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="block md:hidden">
          <h3 className="text-lg font-semibold text-[#D4A73B] mb-3 ">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-[#D4A73B]">
                About
              </Link>
            </li>
            <li>
              <Link href="/about/history" className="hover:text-[#D4A73B]">
                History
              </Link>
            </li>
            <li>
              <Link href="/media" className="hover:text-[#D4A73B]">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/activities" className="hover:text-[#D4A73B]">
                Activities
              </Link>
            </li>
            <li>
              <Link href="/announcements" className="hover:text-[#D4A73B]">
                Announcements
              </Link>
            </li>
            <li>
              <Link href="/pastoral-team" className="hover:text-[#D4A73B]">
                Pastoral Team
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#D4A73B]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-[#D4A73B] mb-3">
            Contact Us
          </h3>
          <p>Stella Maris Parish</p>
          <p>Ayaba Umueze Abayi, Aba, Abia state, Nigeria</p>
          <p>Phone: +234 800 000 0000</p>
          <p>Email: info@stellamarisparish.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#16203A] border-t border-[#D4A73B] text-center py-4 mt-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Stella Maris Parish Aba. All rights
          reserved. Built by{" "}
          <span className="text-[#D4A73B] font-semibold">
            Nurbyte Technologies
          </span>
        </p>
      </div>
    </footer>
  );
}
