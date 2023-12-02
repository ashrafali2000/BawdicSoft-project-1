import {FC} from "react"
import lapImg from "../../../public/images/WebApplication.jpg"
import lockImg from "../../../public/images/Blockchainweb3.jpg"
import Image from "next/image";
interface expserTisePropse {}
const Expertise:FC<expserTisePropse> = () => {
    return(<div className="bg-sky-950 pt-20 pb-16">
        <p className="mb-4 text-4xl text-center font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Our Expertise</p>
    {/*  */}
  <div className="flex justify-evenly items-center flex-wrap pt-10 ">
<div className="flex flex-col w-[250px] sm:w-[400px] md:w-[600px] content-beteen ">
    <p className="mb-4  text-4xl text-start font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-5xl">Web Application Development</p>
    <p className="mb-4 text-start  leading-7  tracking-tight  text-white "> We specialize in creating responsive UI and UX design using React, Vue, and Next JS. By integrating database such as Mongo DB, AWS, or Firebase we provide end to end web application development solutions.</p>
    <p className="mb-4  text-start  leading-7 tracking-tight  text-white "> Be it your website, web application or E-Store, we cover it all for you. We secure the frontend results with structured backend code that completely fulfills customer requirements.</p>
    <p></p>
   
</div>
<div>
    <Image src={lapImg} alt="" className="w-80 h-60 md:w-full md:h-80 "/>
</div>
  </div>
  {/*  */}
  <div className="flex justify-evenly items-center flex-wrap pt-10 ">
<div>
    <Image src={lockImg} alt="" className="w-80 h-60 md:w-full md:h-80 order-1"/>
</div>
<div className="flex flex-col w-[250px] sm:w-[400px] md:w-[600px] content-beteen order-first md:order-none ">
    <p className="mb-4  text-4xl text-start font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-5xl">Blockchain / Web3 Development</p>
    <p className="mb-4 text-start    text-white leading-7 ">BawdicSoft modernizes your business using emerging Blockchain / web3 technology in the digital world. We strengthen businesses and bring agility using custom logic and smart contracts.
We are an NFT development company dealing in NFTs, NFT marketplace, Defi, Smart contracts, DEX (decentralized exchange), DAO, Dapp, Crypto, Blockchain ecosystems, Tokenomics, Wallet (i.e. Metamask), Cryptocurrency, and Metaverse. We integrate efficiency and security with automation into the mix.</p>
    <p></p>
   
</div>
  </div>

 
    </div>)
}
export default Expertise;