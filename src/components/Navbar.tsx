import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../img/myto.png';
import ContactModal from './ContactModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal

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
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-4'}`}>
        <div className="container-custom flex items-center justify-between px-5 md:px-0">
          <img src={Logo} alt="Logo" className='w-20' />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 font-semibold hover:text-primary transition-colors">
              How it Works
            </a>
            <a href="#services" className="text-gray-700 font-semibold hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact_us" className="text-gray-700 font-semibold hover:text-primary transition-colors">
              Contact us
            </a>
            <a href="#testimonials" className="text-gray-700 font-semibold hover:text-primary transition-colors">
              Testimonials
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary rounded"
            >
              Get Started
            </button>
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
            <a href="#services" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#contact_us" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsOpen(false)}>
              Contact us
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsOpen(false)}>
              Testimonials
            </a>
            <button
              className="btn-primary text-center mt-2"
              onClick={() => {
                setIsModalOpen(true);
                setIsOpen(false); // Close menu
              }}
            >
              Get Started
            </button>
          </nav>
        </div>
      </header>

      {/* Modal */}
      <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
};

export default Navbar;
