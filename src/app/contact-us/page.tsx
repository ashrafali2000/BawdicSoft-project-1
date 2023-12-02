import FormSection from "@/components/contactUs/fromSection";
import HeroSection from "@/components/contactUs/heroSection";
import { FC } from "react"
interface contactUsProps {}

const ContactUs :FC<contactUsProps> = () => {
return (<div>
  <HeroSection />
  <FormSection />
</div>)
}
export default ContactUs;