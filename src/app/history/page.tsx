"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaChurch, FaFlag, FaUsers } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Banner from "@/components/Banner";
import ContactSection from "@/components/ReactOut";
import History from "@/components/History";

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <Banner
        imgUrl="/church.jpg"
        headerText="Our History"
        moreText="Tracing the humble beginnings and growth of Stella Maris Parish, Abayi Aba."
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
          <h2 className="text-3xl font-semibold">A Story of Faith</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Stella Maris Parish was established to serve the growing Catholic
            faithful in Abayi, Aba. What began as a small worshipping community
            has grown into a vibrant parish known for strong faith, unity, and
            service to humanity.
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <History />

      {/* Image + Narrative */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-80 w-full overflow-hidden rounded-2xl"
          >
            <Image
              src="/church-interior.jpg"
              alt="Stella Maris Parish history"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold">Built on Sacrifice</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The growth of Stella Maris Parish is rooted in the sacrifices of
              priests, religious, and lay faithful who devoted their time,
              resources, and talents to building a strong Catholic presence in
              the community.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Their legacy continues to inspire new generations to uphold the
              values of faith, service, and love.
            </p>

            <Link
              href="/pastoral-team"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#665734] px-5 py-3 text-sm font-medium text-white transition-all hover:bg-[#665734]/90"
            >
              See the pastoral Team
              <BsArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <ContactSection />
    </main>
  );
}
