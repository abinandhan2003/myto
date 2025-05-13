import React from 'react';
import Bento1 from '../img/b1.png';
import Bento2 from '../img/b2.png';
import Bento3 from '../img/b3.png';

const Cards: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      {/* First image - Full width */}
      <div>
        <a href="#contact_us">
          <img
            src={Bento1}
            alt="Image 1"
            className="w-full rounded-2xl shadow-md object-cover"
          />
        </a>
      </div>


      {/* Second and Third images - Half width each */}
      <div className="flex gap-4">
        <a href="#contact_us"
         className="w-1/2"
        >
          <img
            src={Bento2}
            alt="Image 2"
            className="w-full rounded-2xl shadow-md object-cover"
          />
        </a>

        <a
          href="https://www.hostinger.in/domain-name-results?domain=&from=domain-name-search"
          className="w-1/2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Bento3}
            alt="Image 3"
            className="w-full rounded-2xl shadow-md object-cover"
          />
        </a>
      </div>
    </div>
  );
};

export default Cards;
