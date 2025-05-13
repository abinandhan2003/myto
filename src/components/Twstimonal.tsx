import React from "react";

const TestimonialSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md text-left">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              “Myto made it super easy for me to build a professional website without needing any technical skills. The support team was fast and friendly!”
            </p>
            <div className="mt-4">
              <p className="font-semibold text-[#5025d1]">Ravi Kumar</p>
              <p className="text-sm text-gray-500">Founder, RaviDesigns</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md text-left">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              “I was surprised by how intuitive the platform is. Myto helped me launch my startup site in a weekend. Highly recommended!”
            </p>
            <div className="mt-4">
              <p className="font-semibold text-[#5025d1]">Sneha Patel</p>
              <p className="text-sm text-gray-500">Entrepreneur, CraftNest</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
