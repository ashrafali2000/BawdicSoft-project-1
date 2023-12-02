import Footer from "@/components/footer";
import Expertise from "@/components/home/expertise";
import FalconCompany from "@/components/home/falcon";
import HeroSection from "@/components/home/heoSection";
import OfferSection from "@/components/home/offer";
import SevicesOffer from "@/components/home/servicesOffer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
  <HeroSection />
  <OfferSection />
  <Expertise />
  <SevicesOffer />
  <FalconCompany />
    </>
  )
}
