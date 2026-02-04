"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import Link from "next/link";

const GALLERY_EVENTS = [
  {
    event: "Christmas Celebration 2024",
    date: "December 25, 2024",
    images: [
      "/christmas/img1.jpg",
      "/christmas/img2.jpg",
      "/christmas/img3.jpg",
      "/christmas/img4.jpg",
    ],
  },
  {
    event: "Easter Vigil",
    date: "March 30, 2024",
    images: ["/easter/img1.jpg", "/easter/img2.jpg", "/easter/img3.jpg"],
  },
  {
    event: "Youth Sunday",
    date: "July 2024",
    images: [
      "/youth/img1.jpg",
      "/youth/img2.jpg",
      "/youth/img3.jpg",
      "/youth/img4.jpg",
    ],
  },
  {
    event: "Youth Sunday",
    date: "July 2024",
    images: [
      "/youth/img1.jpg",
      "/youth/img2.jpg",
      "/youth/img3.jpg",
      "/youth/img4.jpg",
    ],
  },
  {
    event: "Youth Sunday",
    date: "July 2024",
    images: [
      "/youth/img1.jpg",
      "/youth/img2.jpg",
      "/youth/img3.jpg",
      "/youth/img4.jpg",
    ],
  },
  {
    event: "Youth Sunday",
    date: "July 2024",
    images: [
      "/youth/img1.jpg",
      "/youth/img2.jpg",
      "/youth/img3.jpg",
      "/youth/img4.jpg",
    ],
  },
  {
    event: "Youth Sunday",
    date: "July 2024",
    images: [
      "/youth/img1.jpg",
      "/youth/img2.jpg",
      "/youth/img3.jpg",
      "/youth/img4.jpg",
    ],
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      {/* Reusable Banner */}
      <Banner
        imgUrl="/church.jpg"
        headerText="Parish Gallery"
        moreText="Moments from our liturgies, events, and parish life"
      />

      {/* Event Quick Links */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {GALLERY_EVENTS.map((section, i) => (
            <div className="scroll-mt-32" key={i}>
              <Link
                key={i}
                href={`#event-${i}`}
                className="group relative block aspect-square overflow-hidden rounded-2xl shadow"
              >
                <Image
                  src={section.images[0]}
                  alt={section.event}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-sm md:text-base font-semibold text-center px-2">
                    {section.event}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Event Sections */}
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {GALLERY_EVENTS.map((section, i) => (
          <section key={i} id={`event-${i}`} className="space-y-6 pt-30 -mt-20">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 ">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  {section.event}
                </h2>
                <p className="text-sm text-muted-foreground">{section.date}</p>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {section.images.map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="relative aspect-square overflow-hidden rounded-2xl shadow-sm group"
                >
                  <Image
                    src={src}
                    alt={`${section.event} image ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-end">
                    <span className="text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition">
                      {section.event}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}
