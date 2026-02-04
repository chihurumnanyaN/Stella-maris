"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa";
import Banner from "@/components/Banner";
import ContactSection from "@/components/ReactOut";

const SECTIONED_ACTIVITIES = [
  {
    title: "Holy Mass & Liturgical Life",
    desc: "The center of our parish life where we gather to worship God through the Eucharist and other sacraments.",
    image: "/images1.jpg",
    activities: [
      { name: "Sunday Mass", time: "6:30am, 8:30am, 10:30am & 5:30pm" },
      { name: "Weekday Mass", time: "6:00am (Mon–Fri)" },
      { name: "Confession", time: "thursdays, Fridays and Saturdays – 7:30am" },
      { name: "Catechism Classes", time: "Sundays – After Mass" },
    ],
  },
  {
    title: "Societies & Community Life",
    desc: "Building unity, leadership, and service through active parish groups.",
    image: "/images4.jpg",
    activities: [
      { name: "CWO Meeting", time: "1st Sunday of the month" },
      { name: "CMO Meeting", time: "2nd Sunday of the month" },
      { name: "Youth Meeting (CYON)", time: "Saturdays – 4:00pm" },
      {
        name: "Mary League Girls Mass",
        time: "First friday of the month– 4:00pm",
      },
      {
        name: "Altar servers Meeting",
        time: "First saturday of the month– 4:00pm",
      },
      { name: "Choir Practice", time: "Tuesdays & Thursdays – 5:00pm" },
    ],
  },
  {
    title: "Prayer & Devotions",
    desc: "Moments of prayer that strengthen our spiritual lives and deepen our relationship with God.",
    image: "/images2.jpg",
    activities: [
      { name: "Rosary", time: "Daily – 6:00am" },
      { name: "Eucharistic Adoration", time: "Thursdays – 10:30am" },
      { name: "Novena Devotions", time: "Will be anounced when necessary" },
    ],
  },
];

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <Banner
        imgUrl="/church.jpg"
        headerText="Parish Activities"
        moreText="Discover the spiritual, social, and charitable activities that bring our parish community to life."
      />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-semibold">Life in the Parish</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Stella Maris Parish offers a wide range of activities designed to
            nurture faith, encourage fellowship, and promote service. Every
            parishioner is invited to participate and grow spiritually.
          </p>
        </motion.div>
      </section>

      {/* Activities – Full Background Sections */}
      <section className="space-y-20">
        {SECTIONED_ACTIVITIES.map((section, idx) => (
          <div
            key={section.title}
            className="relative min-h-fit py-20 flex items-center"
          >
            {/* Background Image */}
            <Image
              src={section.image}
              alt={section.title}
              fill
              priority={idx === 0}
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-3xl font-semibold text-white">
                  {section.title}
                </h3>
                <p className="mt-4 text-white/90 leading-relaxed">
                  {section.desc}
                </p>
              </div>

              <div className="space-y-4">
                {section.activities.map((act) => (
                  <div
                    key={act.name}
                    className="rounded-xl bg-white/10 p-4 backdrop-blur-sm"
                  >
                    <h4 className="font-semibold text-white">{act.name}</h4>
                    <p className="text-sm text-white/80">{act.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/announcements"
            className="inline-flex items-center gap-2 rounded-xl bg-[#665734] px-6 py-3 text-sm font-medium text-white hover:bg-[#665734]/90"
          >
            See Announcements <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <ContactSection />
    </main>
  );
}
