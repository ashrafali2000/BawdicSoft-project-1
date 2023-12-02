import { FC } from "react"
interface heroSectionProps {}

const HeroSection :FC<heroSectionProps> = () => {
return (<div>
<section className="h-[580px] bg-center bg-cover bg-no-repeat bg-[url('https://bawdicsoft.com/wp-content/uploads/2022/08/businessman-touching-virtual-screen.webp')] bg-gray-400 bg-blend-multiply">
    <div className="px-4 mx-auto  text-center py-40 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-5 text-white md:text-5xl lg:text-5xl -ml-30">Feel Free To​</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Contact Us
 </p>
      
    </div>
</section>
</div>)
}
export default HeroSection;