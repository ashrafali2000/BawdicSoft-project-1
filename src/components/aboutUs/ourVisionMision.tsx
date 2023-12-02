import {FC} from "react"
// import lapImg from "../../../public/images/WebApplication.jpg"
// import lockImg from "../../../public/images/Blockchainweb3.jpg"
import Image from "next/image";
interface OurVisionMissionProps {}
const OurVisionMission:FC<OurVisionMissionProps> = () => {
    return(<div className="bg-white pt-20 pb-16">
    {/*  */}
  <div className="flex justify-evenly items-center flex-wrap pt-10 ">
<div className="flex flex-col w-[250px] sm:w-[400px] md:w-[600px] content-beteen ">
    <p className="mb-4  text-4xl text-start font-extrabold tracking-tight leading-none  md:text-3xl lg:text-5xl">Our Vision</p>
    <p className="mb-4 text-start text-lg  text-semibold leading-7  tracking-tight   ">We desire to generate ideas that would make an impact in the digital era. We strive to make technology accessible to everyone regardless of geographical and intellectual boundaries. We want to be the desirable choice for our customers and to serve them with the best possible innovative solutions..</p>

    <p></p>
   
</div>
<div>
    <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/fg54645.webp" alt="" className="w-80 h-80 md:w-full md:h-80 " width={60} height={60}/>
</div>
  </div>
  {/*  */}
  <div className="flex justify-evenly items-center flex-wrap pt-10 ">
<div>
    <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/456564.webp" alt="" className="w-80 h-60 md:w-full md:h-80 order-1" width={60} height={60}/>
</div>
<div className="flex flex-col w-[250px] sm:w-[400px] md:w-[600px] content-beteen order-first md:order-none ">
    <p className="mb-4  text-4xl text-start font-extrabold tracking-tight leading-none  md:text-3xl lg:text-5xl">Our Mission</p>
    <p className="mb-4 text-start  text-lg  text-semibold  leading-7 ">To deliver customized and cost effective digital solutions to our clients while providing efficiency, automation, and enhanced security..</p>
    <p></p>
</div>
  </div>
    </div>)
}
export default OurVisionMission;

