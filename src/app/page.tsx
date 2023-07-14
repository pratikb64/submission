import AboutUs from "@/components/home/AboutUs";
import AppointmentForm from "@/components/home/AppointmentForm";
import Benefits from "@/components/home/Benefits";
import Features from "@/components/home/Features";
import HeroSection from "@/components/home/HeroSection";
import MiddleSection from "@/components/home/MiddleSection";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="flex flex-col max-w-[940px] mx-auto justify-around lg:justify-between sm:flex-row-reverse">
        <AppointmentForm />
        <Benefits />
      </div>
      <MiddleSection />
      <Testimonials />
      <Features />
      <AboutUs />
      <Footer />
    </div>
  );
}
