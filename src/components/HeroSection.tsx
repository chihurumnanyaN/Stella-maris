"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const images = ["/hero1.png", "/hero2.png", "/hero3.png"];

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
              <Image
                src={src}
                alt={`Hero ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-20000 ease-in-out transform scale-100 hover:scale-105"
              />
              {/* Optional Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col justify-center items-center px-6 md:px-20">
                <span className="text-xl md:text-2xl text-orange-400 font-bold">
                  {" "}
                  Welcome to
                </span>
                <h1 className="text-white text-4xl md:text-8xl font-bold mb-4">
                  Stella Maris Parish
                </h1>
                <span className="text-white text-2xl md:text-4xl font-bold">
                  Aba
                </span>
                <p className=" rounded-lg text-amber-100 py-3 px-5 my-5 text-lg italic md:text-3xl underline max-w-xl">
                  "Mma anyi si na chi"
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
