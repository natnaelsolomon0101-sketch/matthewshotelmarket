import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Listings from "@/components/sections/Listings";
import UnderContract from "@/components/sections/UnderContract";
import WhyChoose from "@/components/sections/WhyChoose";
import TrackRecord from "@/components/sections/TrackRecord";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Offices from "@/components/sections/Offices";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Listings />
      <UnderContract />
      <WhyChoose />
      <TrackRecord />
      <Team />
      <Contact />
      <Offices />
      <Footer />
    </>
  );
}
