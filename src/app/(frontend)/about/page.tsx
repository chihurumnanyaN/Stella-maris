"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FaChurch } from "react-icons/fa";
import Banner from "@/components/Banner";
import { BsArrowRight } from "react-icons/bs";
import ContactSection from "@/components/ReactOut";
import ParishAtAGlance from "@/components/parishataglance";
import { Metadata } from "next";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <Banner
        imgUrl="/church.jpg"
        headerText="About Stella Maris Parish"
        moreText="A faith community rooted in worship, service, and love — serving Abayi, Aba and beyond."
      />

      {/* ABOUT STORY */}
      <section className="relative mx-auto py-24">
        <div className="mx-auto w-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl max-w-6xl mx-auto "
          >
            <div className="flex w-full items-center gap-4 rounded-md bg-[#D4A73B] px-6 py-4 text-left font-semibold text-white transition hover:opacity-90">
              <FaChurch className="text-2xl" />
              <h2 className="text-2xl font-semibold tracking-tight">
                Our Parish Story
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground p-3 mt-2 leading-relaxed text-[15px] md:text-base">
              <p>
                Stella Maris Catholic Church, Abayi-Aba, in the Catholic Diocese
                of Aba, is a vibrant faith community rooted in love, service,
                and devotion to the Blessed Virgin Mary,{" "}
                <span className="font-medium text-foreground">
                  Star of the Sea
                </span>
                . Guided by the mission of Christ and enriched by decades of
                faith-filled leadership, our parish continues to serve as a
                spiritual home where hearts are nourished through prayer, the
                sacraments, and the Word of God.
              </p>

              <p>
                We are a welcoming family of believers committed to living out
                the Catholic faith through active worship, evangelization, and
                works of charity that strengthen both our parish and the wider
                community.
              </p>

              <p>
                Today, Stella Maris stands as a beacon of faith and hope in
                Abayi-Aba, nurturing souls through its liturgical life,
                educational apostolate, and numerous lay organizations within
                the Diocese of Aba. From our vibrant youth and children’s groups
                to the dedicated men and women of our parish societies, we are
                united by our calling to grow in holiness and extend the love of
                Christ to all.
              </p>

              <p>
                With gratitude to God and the intercession of Our Blessed Mother
                Mary, we continue to build a parish where faith is lived
                joyfully, community thrives, and every person feels at home in
                the house of the Lord.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white p-10 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-3">
              Meet Our Pastoral Team
            </h3>
            <p className="text-muted-foreground mb-6">
              Our priests and pastoral leaders are dedicated to guiding,
              serving, and nurturing the spiritual life of our parish.
            </p>

            <Link
              href="/pastorial-team"
              className="inline-flex items-center rounded-2xl bg-[#D4A73B] px-6 py-3 text-sm font-medium text-white shadow transition hover:opacity-90"
            >
              View Pastoral Team
              <BsArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
      {/* PARISH AT A GLANCE */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ParishAtAGlance />
        </div>
      </section>

      {/* PASTORAL TEAM CTA */}

      {/* CONTACT / CTA */}
      <ContactSection />
    </main>
  );
}

const metadata: Metadata = {
  title: "About | Stella Maris Parish Aba – Catholic Church in Abia",
  description: "About Stella Maris Parish Aba, Mma anyi si na Chi Parish.",
};
