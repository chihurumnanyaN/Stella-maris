"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Banner from "@/components/Banner"; // make sure path is correct

export default function ContactPage() {
  return (
    <div>
      {/* Banner at the top */}
      <Banner
        imgUrl="/church.jpg"
        headerText="Contact Us"
        moreText="Get in touch with Stella Maris Parish"
      />
      <div className="max-w-7xl mx-auto px-4 py-8 text-left text-gray-700">
        <p className="text-lg leading-relaxed">
          On this Contact page, you can find all the information you need to
          reach Stella Maris Parish. View our address, phone number, and email
          on the left, send us a message directly using the contact form on the
          right, and locate the parish on the interactive map below. We’ve
          designed this page to make it easy for you to get in touch with us for
          inquiries, prayer requests, or information about our services and
          community activities.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 p-8   duration-300">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-[#1B2A49] text-2xl" />
              <p className="font-medium text-gray-800">
                Abayi, Aba, Abia State, Nigeria
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-[#1B2A49] text-2xl" />
              <p className="font-medium text-gray-800">+234 801 234 5678</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[#1B2A49] text-2xl" />
              <p className="font-medium text-gray-800">
                info@stellamarisparish.org
              </p>
            </div>

            {/* Optional: church image */}
            <div className="mt-8">
              <Image
                src="/church-interior.jpg"
                alt="Stella Maris Parish"
                width={500}
                height={300}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 p-8 bg-gradient-to-br from-[#f7f9fc] to-[#e6eef8] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B2A49] focus:border-[#1B2A49] transition-all duration-300"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B2A49] focus:border-[#1B2A49] transition-all duration-300"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1B2A49] focus:border-[#1B2A49] transition-all duration-300"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#1B2A49] text-white px-6 py-3 rounded-xl hover:bg-[#16213B] transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2429301841696!2d7.330363715139873!3d5.152508995602738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3ef6e1b4d3b%3A0x1510968571969282!2sStella%20Maris%20Parish!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
            width="100%"
            height="400"
            className="rounded-lg border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
