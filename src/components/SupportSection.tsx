import React from "react";
import SupportImage from "../img/support.webp"; 

const SupportSection = () => {
  return (
    <section className="w-full py-5">
      <div className="container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 md:pr-12 md:mb-0 text-lg font-semibold">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Here to Help <span className="text-[#5025d1]">24/7</span>
          </h2>
          <p className="text-gray-600 mb-4">
            Whether you’re launching your site or scaling your business, our support team is always just a message away.
          </p>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Quick response within minutes</li>
            <li>Dedicated support team</li>
            <li>Comprehensive help center</li>
            <li>Live chat & email support</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={SupportImage}
            alt="24/7 Support"
            className="md:w-[80%] w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default SupportSection;
