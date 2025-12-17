import AboutSection from "@/components/AboutSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import HeroSection from "@/components/HeroSection";
import MassSchedule from "@/components/MassSchedule";
import ContactSection from "@/components/ReactOut";
import TodaysReadings from "@/components/TopdayReading";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <MassSchedule />
      <AboutSection />
      <ActivitiesSection />
      <TodaysReadings />
      <ContactSection />
    </>
  );
};

export default page;
