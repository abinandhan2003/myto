import React from "react";
import Customerimg from "../img/cusimg.webp";

const SplitSection = () => {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row min-h-screen">
        {/* Image Section  1/2 */}
        <div className="w-full lg:w-1/2">
          <img
            src={Customerimg}
            alt="Customer"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Text Section 1/2 */}
        <div className="w-full lg:w-1/2 flex flex-col p-8 bg-white rounded-lg mt-8 lg:mt-0 lg:ml-8">
          <div className="lg:text-4xl text-2xl font-semibold leading-relaxed">
            “<span className="text-[#5025d1]"> Myto </span>is built to make website creation super convenient for someone who has a clear idea of what they want to create but lacks technical skills.”
          </div>

          <div className="lg:text-4xl text-2xl font-semibold leading-relaxed mt-5 lg:mt-10 text-slate-400">
            We don't just build products <br />
            we build relationships.
          </div>

          <div className="lg:text-3xl text-2xl font-semibold leading-relaxed mt-5 lg:mt-10 text-slate-400">
            When you reach out, we reach back <br />
            fast and friendly.
          </div>

          <div className="mt-4 text-lg text-gray-600 flex items-end flex-col">
            <p className="text-[#5025d1] font-semibold">- Abi Nandhan</p>
            <p>CEO, Myto</p>
            <p>myto.co.in</p>   
            <p>+91 9092312162</p>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
