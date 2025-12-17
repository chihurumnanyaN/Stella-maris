"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white py-36">
      <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:space-x-12">
        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A49] mb-6">
            About Stella Maris Parish Aba
          </h2>
          <p className="text-gray-700 mb-6">
            Stella Maris Parish Aba, located in Abia State, Nigeria, is a
            vibrant Catholic community committed to spiritual growth, worship,
            and service. The parish has a rich history of fostering faith among
            its members and actively engaging in community outreach, education,
            and charitable works. Known for its warm and welcoming congregation,
            Stella Maris Parish stands as a beacon of hope and devotion in Aba
            and beyond.
          </p>
          <Link
            href="/about"
            className="inline-block bg-[#D4A73B] text-[#1B2A49] font-semibold px-6 py-3 rounded hover:bg-[#c49e2f] transition-colors"
          >
            Learn More
          </Link>
        </div>

        {/* Optional Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/hero1.png"
            width={60}
            height={50}
            alt="Stella Maris Parish Aba"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
