"use client";

import Image from "next/image";
import Link from "next/link";

const ACTIVITIES = [
  {
    title: "Holy Mass & Liturgies",
    desc: "We celebrate Holy Mass, observe liturgical seasons, feast days, and all sacramental celebrations of the Church.",
    image: "/images1.jpg",
  },
  {
    title: "Prayer & Devotions",
    desc: "The parish gathers for the Rosary, Eucharistic Adoration, novenas, retreats, and other spiritual devotions.",
    image: "/images2.jpg",
  },
  {
    title: "Catechesis & Faith Formation",
    desc: "Through catechism classes, Bible study, and teachings, we help children, youths, and adults grow in faith.",
    image: "/images3.jpg",
  },
  {
    title: "Parish Societies & Community Life",
    desc: "Our parish societies such as CWO, CMO, CYON, and other groups promote fellowship, service, and active participation.",
    image: "/images4.jpg",
  },
];

export default function ActivitiesSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Activities</h2>
        <p className="max-w-3xl mx-auto text-slate-600 mb-12">
          Participate in parish life in our community. Every activity is an
          opportunity to pray, worship, know your faith, meet friends as we go
          the spiritual journey together.
        </p>
        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-12">
          {ACTIVITIES.map((item, index) => (
            <div
              key={index}
              className="relative h-72 w-full overflow-hidden group"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition" />

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed max-w-md">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Button */}
        <Link
          href="/activities"
          className="inline-block bg-(--primary) text-white px-8 py-3 rounded-xl font-medium hover:bg-(--primary)/80 transition"
        >
          View All Activities
        </Link>
      </div>
    </section>
  );
}
