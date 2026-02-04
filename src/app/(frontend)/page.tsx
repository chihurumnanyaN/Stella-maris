import AboutSection from "@/components/AboutSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import DonateBtn from "@/components/DonateBtn";
import HeroSection from "@/components/HeroSection";
import MassSchedule from "@/components/MassSchedule";
import ContactSection from "@/components/ReactOut";
import TodaysReadings from "@/components/TopdayReading";

const page = () => {
  return (
    <main>
      <HeroSection />
      <MassSchedule />
      <AboutSection />
      <ActivitiesSection />
      <TodaysReadings />
      <ContactSection />
      <div className="fixed bottom-7 right-0 z-50 p-5 flex xl:hidden w-fit">
        <DonateBtn />
      </div>
    </main>
  );
};

export default page;
