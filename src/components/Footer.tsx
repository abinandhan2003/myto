import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-start items-center space-y-6 md:space-y-0">

        {/* Logo */}
        <div className="text-2xl font-bold text-[#5025d1]">
          Myto
        </div>


        {/* Terms and Privacy */}
        <div className="text-sm space-x-4 ml-10">
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4 ml-10">
          <a href="#" aria-label="Facebook" className="hover:text-[#5025d1]">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-[#5025d1]">
            <Twitter size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-[#5025d1]">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#5025d1]">
            <Linkedin size={20} />
          </a>
        </div>
      </div>


      {/* Optional Bottom Line */}
      <div className="mt-2 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Myto. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
