"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaChurch, FaUsers, FaHandsHelping, FaClock } from "react-icons/fa";
import Banner from "@/components/Banner";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ContactSection from "@/components/ReactOut";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <Banner
        imgUrl="/church.jpg"
        headerText="About Stella Maris Parish"
        moreText="A faith community rooted in worship, service, and love — serving Abayi, Aba and beyond."
      />

      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-10">
              <h2 className="text-3xl font-semibold">Who We Are</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Stella Maris Parish is a Roman Catholic community dedicated to
                proclaiming the Gospel of Jesus Christ through prayer,
                sacraments, and active charity. We strive to be a welcoming home
                where families, youths, and individuals grow in faith and
                fellowship.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Guided by the teachings of the Church, our parish emphasizes
                spiritual growth, unity, and service to humanity — especially
                the poor and vulnerable.
              </p>
            </div>

            <Link
              href="/history"
              className="
    group inline-flex items-center justify-center gap-2
    rounded-xl bg-[#665734] px-5 py-3
    text-sm font-medium text-white
    transition-all duration-300
    hover:bg-[#665734]/90 hover:gap-3
    focus:outline-none focus:ring-2 focus:ring-[#665734]/40
  "
            >
              <span>Read more about our history</span>
              <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-80 w-full overflow-hidden rounded-2xl"
          >
            <Image
              src="/church-interior.jpg"
              alt="Parish community"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-background p-6 shadow-sm">
              <FaChurch className="text-3xl" />
              <h3 className="mt-4 text-xl font-semibold">Our Mission</h3>
              <p className="mt-2 text-muted-foreground">
                To worship God faithfully, nurture spiritual growth, and serve
                our neighbors with compassion and humility.
              </p>
            </div>

            <div className="rounded-2xl bg-background p-6 shadow-sm">
              <FaUsers className="text-3xl" />
              <h3 className="mt-4 text-xl font-semibold">Our Vision</h3>
              <p className="mt-2 text-muted-foreground">
                To be a vibrant parish where faith comes alive through
                community, service, and love.
              </p>
            </div>

            <div className="rounded-2xl bg-background p-6 shadow-sm">
              <FaHandsHelping className="text-3xl" />
              <h3 className="mt-4 text-xl font-semibold">Our Values</h3>
              <p className="mt-2 text-muted-foreground">
                Faith, unity, charity, integrity, and commitment to Christian
                living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parish Life */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Parish Life</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Our parish life is enriched through liturgical celebrations, active
          societies, youth programs, and outreach initiatives. Everyone is
          encouraged to participate and find a place to belong.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 mb-10">
          <div className="rounded-2xl bg-background p-6 shadow-sm flex gap-4">
            <FaClock className="text-2xl" />
            <div>
              <h4 className="font-semibold">Worship & Sacraments</h4>
              <p className="text-sm text-muted-foreground">
                Daily and Sunday Masses, confessions, and special liturgical
                celebrations.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-background p-6 shadow-sm flex gap-4">
            <FaUsers className="text-2xl" />
            <div>
              <h4 className="font-semibold">Societies & Groups</h4>
              <p className="text-sm text-muted-foreground">
                Catholic Women Organization, Catholic Men Organization, Youths,
                and other ministries.
              </p>
            </div>
          </div>
        </div>

        <Link
          href="/pastorial-team"
          className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-sm font-medium text-foreground shadow"
        >
          see our pastorial team
          <BsArrowRight className="ml-2" />
        </Link>
      </section>

      {/* CTA */}
      <ContactSection />
    </main>
  );
}
