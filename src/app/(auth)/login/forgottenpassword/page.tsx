import Logo from "@/components/Logo";
import React from "react";
import {
  FaChurch,
  FaEnvelope,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";

const ForgotPassword: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light text-[#111318] flex items-center justify-center p-6 font-display">
      <div className="w-full max-w-md">
        {/* Header */}

        {/* Card */}
        <div className="bg-white rounded-xl border border-[#e5e7eb] p-8 shadow-xl shadow-gray-200/50">
          <div className="flex flex-col items-center gap-4 mb-10">
            <Logo colour="(--primary)" />
            <p className="text-sm font-medium text-[#616f89]">
              Parish Admin Dashboard
            </p>
          </div>
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold mb-2">Forgot Password</h2>
            <p className="text-sm text-[#616f89]">
              Enter your email to reset your password
            </p>
          </div>

          <form className="space-y-6">
            {/* Email */}

            <label className="flex flex-col">
              <p className="text-[#111318]  text-base font-medium leading-normal pb-2">
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

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-(--primary) text-white px-5 py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20 active:scale-[0.98]"
            >
              <span>Send Reset Link</span>
              <FaArrowRight />
            </button>
          </form>
        </div>

        {/* Back to login */}
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#616f89] hover:text-primary transition-colors group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Login</span>
          </a>
        </div>

        {/* Footer */}
        <footer className="py-10 px-4 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Stella Maris Parish. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ForgotPassword;
