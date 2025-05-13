
import { Description } from '@radix-ui/react-toast';
import { FileText, Rocket, Users } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText size={48} className="text-primary" />,
      title: "1. Collect user requirements",
      description: "We gather your needs and preferences to create a tailored website that meets your goals."
    },
    {
      icon: <Users size={48} className="text-primary" />,
      title: "2. Design and Develop",
      description: "Our team designs and develops your website, ensuring it is user-friendly and visually appealing.",
    },
    {
      icon: <Rocket size={48} className="text-primary" />,
      title: "3. Publish & Launch",
      description: "Publish your website with a single click. Get your professional online presence up and running in minutes."
    }
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-16 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-700 text-lg">Our simple three-step process gets your website up and running quickly without any technical hassle.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm transition-all duration-300 hover:shadow-md opacity-0 animate-fade-up card-hover"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
              <p className="text-gray-700 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
