"use client";
import React from "react";

import Image from "next/image";
import { motion } from "motion/react";

const Banner = ({
  imgUrl,
  headerText,
  moreText,
}: {
  imgUrl: string;
  headerText: string;
  moreText: string;
}) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imgUrl}
          alt="Stella Maris Parish"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          {headerText}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-white/90"
        >
          {moreText}
        </motion.p>
      </div>
    </section>
  );
};

export default Banner;
