import React from 'react';
import Bento1 from '../img/b1.png';
import Bento2 from '../img/b2.png';
import Bento3 from '../img/b3.png';

const Cards: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      {/* First image - Full width */}
      <div>
      
        <img
          src={Bento1}
          alt="Image 1"
          className="w-full rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* Second and Third images - Half width each */}
      <div className="flex gap-4">
        <img
          src={Bento2}
          alt="Image 2"
          className="w-1/2 rounded-2xl shadow-md object-cover"
        />
        <img
          src={Bento3}
          alt="Image 3"
          className="w-1/2 rounded-2xl shadow-md object-cover"
        />
      </div>
    </div>
  );
};

export default Cards;
