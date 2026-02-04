import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";
import {
  MdChurch,
  MdLock,
  MdMail,
  MdSailing,
  MdSecurity,
} from "react-icons/md";

const page = () => {
  return (
    <div className=" font-display min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-[480px] bg-white  shadow-xl rounded-xl overflow-hidden border border-gray-100 ">
          <div className="p-8">
            <div className="w-fit mx-auto py-10">
              <Logo colour="(--primary)" />
            </div>
            <div className="text-center mb-8">
              <h2 className="text-[#111318]  tracking-light text-[28px] font-bold leading-tight pb-2">
                CMS Admin Login
              </h2>
              <p className="text-gray-500  text-base font-normal leading-normal">
                Please enter your administrative credentials.
              </p>
            </div>
            <form className="space-y-5">
              <div className="flex flex-col gap-2">
                <label className="flex flex-col">
                  <p className="text-[#111318] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                    Email Address
                  </p>
                  <div className="relative">
                    <MdMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111318]  focus:outline-0 focus:ring-2 focus:ring-/20 border border-[#dbdfe6] bg-white focus:border-(--primary) h-14 placeholder:text-[#616f89] pl-12 pr-4 text-base font-normal leading-normal"
                      placeholder="email@stellamaris.org"
                      type="email"
                    />
                  </div>
                </label>
              </div>
              <div className="flex flex-col gap-2">
                <label className="flex flex-col">
                  <div className="flex justify-between items-center pb-2">
                    <p className="text-[#111318] dark:text-gray-200 text-base font-medium leading-normal">
                      Password
                    </p>
                    <a
                      className="text-(--primary) text-sm font-semibold hover:underline"
                      href="/login/forgottenpassword"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <MdLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111318] focus:outline-0 focus:ring-2 focus:ring-/20 border border-[#dbdfe6] bg-white focus:border- h-14 placeholder:text-[#616f89] pl-12 pr-4 text-base font-normal leading-normal"
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>
                </label>
              </div>
              <div className="pt-4">
                <button
                  className="w-full flex items-center justify-center rounded-xl h-14 bg-(--primary) text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-/90 shadow-lg shadow-/20 transition-all active:scale-[0.98]"
                  type="submit"
                >
                  Login to Dashboard
                </button>
              </div>
            </form>
            <div className="mt-8 pt-6 border-t border-gray-100  text-center">
              <p className="text-sm text-gray-500  flex items-center justify-center gap-1">
                <MdSecurity />
                Authorized Personnel Only
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-10 px-4 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Stella Maris Parish. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default page;
