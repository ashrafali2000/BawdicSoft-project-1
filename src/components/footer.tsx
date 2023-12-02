import { FC } from "react"
import logo from "../../public/images/logo.png"
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import Image from "next/image"
interface footerProps {}
const Footer: FC<footerProps> = () => {
    return (<div>
<footer className="bg-black dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-evenly md:gap-30">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                  <Image src={logo} className="h-12 w-12  " alt="BowdicSoft Logo" />
                  <span className="self-center text-3xl font-semibold  text-sky-600 pl-2">BawdicSoft</span>
              </a>
              <p className="text-gray-200 leading-5 text-lg w-[300px] md:[400px] lg:w-[500px] pt-4">BawdicSoft is a web application, blockchain, DeFi, NFT, and NFT Marketplace Development Company delivering quick and innovative web and web3 solutions with improved security and optimized performance.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-lg font-extrabold  uppercase text-sky-600">Company</h2>
                  <ul className="text-gray-100 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="">Home</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://tailwindcss.com/" className="">Portfolio</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://tailwindcss.com/" className="">About Us</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://tailwindcss.com/" className="">Careers</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://tailwindcss.com/" className="">Contact Us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-lg  font-extrabold  uppercase dark:text-white text-sky-600">Services</h2>
                  <ul className="text-gray-100 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className=" ">Web Application</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="">Blockchain</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-lg  font-extrabold  uppercase  text-sky-600">Contact Us</h2>
                  <ul className="text-gray-100 dark:text-gray-400 font-medium">
                      <li className="mb-4 flex gap-3">
                      <MdOutlineMailOutline className= "text-white text-2xl"/><a href="#" className="">ali@gmail.com</a>
                      </li>
                      <li className="flex gap-3">
                      <FaPhone   className= "text-white text-2xl" /> <a href="#" className="">+9233533344</a>
                      </li>
                  </ul>
                  {/* Media Links */}
                  <div className="flex justify-between gap-2 pt-10"> 
                    <div className="flex rounded-full bg-green-500 justify-center items-center p-2 cursor-pointer"><FaWhatsapp className="text-white text-2xl"/></div>
                    <div className="flex rounded-full bg-sky-700 justify-center items-center p-2 cursor-pointer"><FaLinkedin className="text-white text-2xl"/></div>
                    <div className="flex rounded-full bg-sky-600 justify-center items-center p-2 cursor-pointer"><GrTwitter  className="text-white text-2xl"/></div>
                    <div className="flex rounded-full bg-sky-900 justify-center items-center p-2 cursor-pointer"><MdFacebook   className="text-white text-2xl"/></div>
                 
                    <div>
                        {/* <Image src="" alt="" width={60} height={60}/> */}
                    </div>
                  </div>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between md:px-14">
          <span className="text-md  text-gray-300 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
         
          <div>
            <p className="text-white text-md ">Privacy Policy</p>
          </div>
      </div>
    </div>
</footer>
    </div>)
}

export default Footer;