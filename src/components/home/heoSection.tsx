import React, { FC, ReactNode, MouseEvent } from 'react';
// import heroSecImg from "../../public/images/final-head.webp"

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className="h-[800px] bg-center bg-cover bg-no-repeat bg-[url('https://bawdicsoft.com/wp-content/uploads/2022/08/final-head.webp')] bg-gray-400 bg-blend-multiply">
    <div className="px-4 mx-auto  text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl -ml-30">Developing the Future Today</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Our team of expert developers can quickly deliver innovative web application and Web3 development solutions with improved security and optimized
 performance.</p>
      
    </div>
</section>
  );
};

export default HeroSection;


// ATS Code
//   <div  style={{
//   backgroundImage:`url(https://bawdicsoft.com/wp-content/uploads/2022/08/final-head.webp)`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   height: '710px',
// }} className='relative !bg-none  md:block '>
// <div className='flex  md:justify-center flex-wrap items-end h-[384px]  -ml-40 absolute inset-0 bg-black opacity-50'>
//   <h1 className='font-black text-5xl md:text-[60px] lg:text-[70px] text-white mx-auto w-[200px] sm:w-[300px]  md:w-[500px] lg:w-[800px]'>Developing the Future
// Today</h1>
// </div>
// <div className='flex justify-center flex-wrap items-start h-[328px] pt-5 -ml-40 top-96 absolute inset-0 bg-black opacity-50'>
// <p className='font-semibold text-[25px] !text-white mx-auto w-[200px] sm:w-[300px] md:w-[500px] lg:w-[800px]'>Our team of expert developers can quickly deliver innovative web application
// and Web3 development solutions with improved security and optimized
// performance.
// </p>
// </div>
// </div>