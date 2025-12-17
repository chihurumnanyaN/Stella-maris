"use client";

import { BiMapPin, BiPhone } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className=" pt-26 pb-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Get In Touch
          </h2>

          <div className="space-y-6 text-slate-700">
            {/* Address */}
            <div className="flex items-start gap-4">
              <BiMapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Visit Us</h4>
                <p>
                  Stella Maris Catholic Parish
                  <br />
                  Abayi, Aba
                  <br />
                  Abia State, Nigeria
                </p>

                <p className="mt-2 text-sm">
                  <strong>Office Hours:</strong>
                  <br />
                  Monday – Friday: 9:00am – 5:00pm
                </p>

                <p className="mt-2 text-sm">
                  <strong>Priest Consulting Hours:</strong>
                  <br />
                  Wednesday: 9:00am – 2:00pm
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <BiPhone className="w-6 h-6 text-blue-600" />
              <div>
                <h4 className="font-semibold text-lg">Call Us</h4>
                <p>+234 80X XXX XXXX</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <FiMail className="w-6 h-6 text-blue-600" />
              <div>
                <h4 className="font-semibold text-lg">Email Us</h4>
                <p>stellamarisparish@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B2A49]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B2A49]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B2A49]"
            />

            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-gray-200 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#1B2A49]"
            />

            <button
              type="submit"
              className="w-full bg-[#1B2A49] text-white py-3 rounded-lg hover:bg-[#142a55] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
