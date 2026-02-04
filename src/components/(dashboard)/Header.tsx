"use client";
import React, { useState } from "react";
import { BiArrowFromRight, BiChurch, BiNotification } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex flex-col sticky top-0 z-50">
      <div className="flex items-center justify-between border-b border-[#dbdfe6] h-20 bg-white pl-4 pr-8 py-auto  z-10">
        <div className="flex md:hidden mr-7">
          <button className="text-2xl" onClick={() => setOpen((prev) => !prev)}>
            {open ? <BiArrowFromRight /> : <GiHamburgerMenu />}
          </button>{" "}
        </div>

        <div className="flex items-center text-xl gap-4">
          <BiChurch className="hidden md:flex" />
          <h2 className="text-[#111318] pl-2  font-bold tracking-tight">
            Dashboard Overview
          </h2>
        </div>
        <div className="flex h-full items-center gap-6">
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl bg-(--primary) text-[#111318] dark:text-white hover:bg-gray-200  transition-colors">
              <BiNotification />
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
          <div className="h-8 w-px bg-[#dbdfe6]  mx-2"></div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-md text-[#010205]  mt-1">Parish Admin</p>
            </div>
            <div
              className="size-10 rounded-full bg-(--primary)/20 border-2 border-(--primary)/10 bg-center bg-cover"
              data-alt="Profile picture of the parish administrator"
            ></div>
          </div>
        </div>
      </div>
      <div className="absolute top-20 z-50 flex w-full h-full">
        {open && (
          <>
            <Sidebar />
            <div
              onClick={() => setOpen((prev) => !prev)}
              className="w-full h-screen "
            ></div>
          </>
        )}{" "}
      </div>
    </header>
  );
};

export default Header;
