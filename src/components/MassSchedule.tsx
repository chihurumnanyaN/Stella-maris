"use client";

import { FaChurch, FaPrayingHands, FaMoon, FaSun } from "react-icons/fa";

const massTimes = [
  {
    type: "Sunday Mass",
    time: "6:00 AM, 8:00 AM, 10:00 AM, 5:00 PM",
    icon: <FaChurch className="text-[#D4A73B] text-2xl" />,
  },
  {
    type: "Weekday Mass",
    time: "6:00 AM, Everyday",
    icon: <FaSun className="text-[#D4A73B] text-2xl" />,
  },
  {
    type: "Adoration",
    time: "Every Thursday, 10:00 AM - 3:00 PM",
    icon: <FaPrayingHands className="text-[#D4A73B] text-2xl" />,
  },
  {
    type: "Benediction",
    time: "Sunday, 5:30 PM",
    icon: <FaMoon className="text-[#D4A73B] text-2xl" />,
  },
];

export default function MassSchedule() {
  return (
    <section className=" py-36">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A49] mb-10 text-center">
          Mass & Prayers Schedule
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {massTimes.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1B2A49] text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.type}</h3>
              <p className="text-sm">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
