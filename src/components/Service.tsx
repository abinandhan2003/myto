import React, { useState } from 'react';

const categories = [
  'Profile Website',
  'Bussiness Website',
  'Modern Website',
  'Creative Design',

  'Coming Soon',
];

export default function WebsiteTemplateSection() {
  const [active, setActive] = useState('Profile Website');

  return (
    <section className="text-center py-16 px-4 bg-white">
      <p className="text-sm text-gray-600 font-medium mb-4">Our Sevices</p>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
        Whatever website you&apos;ll build, it&apos;ll look good.
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`px-6 py-3 rounded-full border transition font-medium
              ${
                active === category
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:border-black'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
