import Image from "next/image";
import logo from "../../../public/images/PastedGraphics-1024x306.png"
import { FC } from "react";
interface falcolProps {}
 const FalconCompany : FC<falcolProps> = () => {
    return(<div>
        <div className="flex flex-col justify-center items-center  pb-28">
     <Image src={logo} alt="" className="w-[300px] h-[150px] md:w-[600px] md:h-[200px]"></Image>
     <p className="text-2xl md:4xl font-bold text-sky-900 text text-center">Falcone Technologies our partner company</p>
        </div>
    </div>)
 }
 export default FalconCompany;