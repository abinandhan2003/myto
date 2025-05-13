import Hero from '@/components/Hero';
import Navbar from '../components/Navbar';
import Clients from '@/components/Clients';
import Cards from '@/components/BentoCards';
import WebsiteTemplateSection from '@/components/Service';
import HowItWorks from '@/components/HowItWorks';
import SplitSection from '@/components/Customer';
import Contactform from '../components/Contact';
import Testimonials from '@/components/Testimonials';



const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Cards />
      <WebsiteTemplateSection />
      <HowItWorks />
      <SplitSection />
      <Contactform />
      <Testimonials />

      {/* <Clients /> */}
    </div>
  );
};

export default Index;
