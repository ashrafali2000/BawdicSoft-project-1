import Image from 'next/image';
import React, { FC } from 'react';
interface OfferSectionProps  {}

const OfferSection :FC<OfferSectionProps> = () => {
 return (<div className='flex justify-center gap-2 flex-wrap pt-16 bg-gray-200 pb-16'>
    <div className='w-[400px]'>
        <p className='text-black  md:text-start text-xl md:text-3xl lg:text-4xl '>We offer Innovation, Optimization, Automation, and enhanced Security...</p>
    </div>
    <div className=' w-[300px] sm:w-[500px] mt-10 lg:mt-0 md:w-[700px]'>
  <span className='text-semibold text-lg  text-gray-600'> BawdicSoft is a  web application development and Web3 solutions provider founded in 2018.</span> 
<span className='text-semibold text-lg   text-gray-600'>We present all the latest technologies such as Web3.0, Web development, Software Development, <a href='/web application' className='text-bold text-md text-blue-800'> Web application</a>, E-Commerce & Web store development, Decentralised exchanges, <a href='/web application' className='text-bold text-md text-blue-800'> NFT Market development</a> Artificial Intelligence, and AR/VR all under one umbrella. We aim to provide full-stack digital solutions to our customers integrating state-of-the-art technologies and emerging ideas into their business.</span>
    </div>


 </div>)
}
export default OfferSection;