import HeroSection from "./sections/herosection";
import AboutUs from "./sections/aboutus";
import Texto from "./sections/texto";
import Abilities from "./sections/abilities";
import Services from "./sections/services";
import TwoPictures from "./sections/twopictures";
import FriendlyEnviroment from "./sections/friendlyenvi";
import Reviews from "./sections/reviews";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="py-12 bg-[#5E442E]"/>
      <AboutUs />
      <Texto />
      <Abilities />
      <Services />
      <TwoPictures />
      <Services />
      <FriendlyEnviroment />
      <Reviews />
    </>
  );
}
