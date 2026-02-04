"use client";

import { useTodaysReadings } from "@/hooks/useTodaysReadings";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FaBible, FaBook, FaPray } from "react-icons/fa";

export default function TodaysReadings() {
  const { data, isLoading, error } = useTodaysReadings();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images2.jpg"
          alt="Church background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70 bg-opacity-60"></div>{" "}
        {/* dark overlay */}
      </div>

      <div className="relative max-w-5xl mx-auto px-4 text-white">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Today’s Readings</h2>
          <p className="text-lg text-gray-200">
            Feed your soul with the Word of God
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {/* First Reading */}
          <div className="bg-[#4571f4]/50 bg-opacity-80 rounded-xl shadow-xl p-6 text-center hover:scale-105 transform transition duration-300">
            <FaBook className="mx-auto text-3xl mb-3 text-yellow-300" />
            <h3 className="text-xl font-semibold mb-2">First Reading</h3>
            {isLoading ? (
              <p className=" text-slate-500 animate-pulse">
                Loading today’s readings…
              </p>
            ) : error ? (
              <p>
                {" "}
                Oops! Something went wrong. <br />
                {(error as Error).message}
              </p>
            ) : (
              <p className="text-white font-medium text-base">
                {data?.firstReading?.ref}
              </p>
            )}
          </div>

          {/* Psalm */}
          <div className="bg-[#e2e9f8]/50 bg-opacity-80 rounded-xl shadow-xl p-6 text-center hover:scale-105 transform transition duration-300">
            <FaPray className="mx-auto text-3xl mb-3 text-yellow-300" />
            <h3 className="text-xl font-semibold mb-2">Responsorial Psalm</h3>
            {isLoading ? (
              <p className=" text-slate-500 animate-pulse">
                Loading today’s readings…
              </p>
            ) : error ? (
              <p>
                {" "}
                Oops! Something went wrong. <br />
                {(error as Error).message}
              </p>
            ) : (
              <p className="text-white font-medium text-base">
                “{data?.psalm?.ref}”
              </p>
            )}
          </div>

          {/* Gospel */}
          <div className="bg-[#deb858]/50 bg-opacity-80 rounded-xl shadow-xl p-6 text-center hover:scale-105 transform transition duration-300">
            <FaBible className="mx-auto text-3xl mb-3 text-blue-800" />
            <h3 className="text-xl font-semibold mb-2">Gospel</h3>
            {isLoading ? (
              <p className=" text-slate-500 animate-pulse">
                Loading today’s readings…
              </p>
            ) : error ? (
              <p>
                {" "}
                Oops! Something went wrong. <br />
                {(error as Error).message}
              </p>
            ) : (
              <p className="text-white font-medium text-base">
                {data?.gospel?.ref}
              </p>
            )}
          </div>
        </div>

        {/* Read Full Reading */}
        <div className="mt-12 text-center">
          <a
            href={data?.usccbLink}
            target="_blank"
            className="flex justify-center items-center  gap-3 w-fit px-8 py-3 rounded-full bg-white font-semibold text-[#1B2A49] hover:text-[#142a55] transition"
          >
            <span>Read Full Reading</span>
            <BsArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
