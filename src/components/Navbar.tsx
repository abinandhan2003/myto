
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../img/myto.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex items-center justify-between px-5 md:px-0">
       
       <img src={Logo} alt="Logo" className='w-20' />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">
            How it Works
          </a>
          <a href="#templates" className="text-gray-700 hover:text-primary transition-colors">
            Templates
          </a>
          <a href="#benefits" className="text-gray-700 hover:text-primary transition-colors">
            Benefits
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#contact" className="btn-primary rounded">
            Get Started
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white absolute w-full shadow-md transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="flex flex-col px-6 py-4 space-y-4">
          <a href="#how-it-works" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsOpen(false)}>
            How it Works
          </a>
          <a href="#templates" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsOpen(false)}>
            Templates
          </a>
          <a href="#benefits" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsOpen(false)}>
            Benefits
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsOpen(false)}>
            Testimonials
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsOpen(false)}>
            Pricing
          </a>
          <a href="#contact" className="btn-primary text-center mt-2" onClick={() => setIsOpen(false)}>
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
