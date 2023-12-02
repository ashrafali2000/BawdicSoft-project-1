import DocumtentsSectins from "@/components/aboutUs/document";
import HeroSection from "@/components/aboutUs/heroSection";
import OurSevices from "@/components/aboutUs/ourServices";
import OurVisionMission from "@/components/aboutUs/ourVisionMision";
import { FC } from "react";

interface aboutUsProps {}

 const AboutUs :FC<aboutUsProps> = () => {
  return (
    <>
   <div>
    <HeroSection />
    <DocumtentsSectins />
    <OurSevices />
    <OurVisionMission />
   </div>
    </>
  )
}

export default AboutUs;
