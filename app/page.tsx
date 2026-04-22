
import { ContactSection } from "@/components/sections/ContactSection";
import {CreationsSection} from "@/components/sections/CreationsSection";
import {HeroSection} from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ReservationSection } from "@/components/sections/ReservationSection";
import {SavoirFaireSection} from "@/components/sections/SavoirFaireSection";
import {WhyChooseUsSection} from "@/components/sections/WhyChooseUsSection";
import {FAQSection} from "@/components/sections/FAQSection";
import { GallerySection } from "@/components/sections/GallerySection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <CreationsSection />
      <WhyChooseUsSection />
      <SavoirFaireSection />
      <GallerySection />
      <ProcessSection />
      <ReservationSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}