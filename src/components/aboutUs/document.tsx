import { FC } from "react";

interface documentsProps {}
const DocumtentsSectins:FC<documentsProps> = () => {
 return(<div>
    <div className="py-24 px-16 md:px-60 flex flex-col gap-5">
        <p className="text-center text-gray-700 text-lg md:text-xl leading-7">We are a group of people with diversified experiences in tech gathered in one place with a will to leave an impact on the industry which is constantly transforming each day. Our motive is to provide services in emerging tech with ease of development process incorporating the mantra of Innovation, speed, automation, and security.</p>
        <p className="text-center text-gray-700 text-lg md:text-xl leading-7" >We started our operations as freelancers, by understanding problems in the freelance world and the software industry we have created a business model where both of these factors are coped with from the client’s perspective and customer satisfaction is prioritized at the highest level. We are keen to implement blockchain applications parallel to the existing business logic of our customers.</p>
        <p className="text-center text-gray-700 text-lg md:text-xl leading-7">Our business model involved providing cost effective development with the customer's involvement in each step along the way. We keep our customers updated with what has been done in their project and also keep inquiring what more does the customer desire to make prompt changes wherever required.</p>
    </div>
 </div>)
}
export default DocumtentsSectins;